import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CalendarOptions, EventClickArg, EventApi } from '@fullcalendar/angular';

import Swal from 'sweetalert2';
import { CalendarService } from './calendar.service';
import { TokenStorage } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  @ViewChild('modalShow') modalShow: TemplateRef<any>;
  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;

  formEditData: FormGroup;
  submitted = false;
  category: any[];
  newEventDate: any;
  editEvent: any;
  calendarEvents: any[];
  // event form
  formData: FormGroup;
  rowData:any[]=[]
  events:any[]=[]
  eventss:any=[{
    title:"lunch",start:"2022-10-22"
  }]

  calendarOptions: CalendarOptions = {
   
  };
  currentEvents: EventApi[] = [];

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Skote' }, { label: 'Calendar', active: true }];

    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    this.formEditData = this.formBuilder.group({
      editTitle: ['', [Validators.required]],
      editCategory: [],
    });
    this._fetchData();
    this.getListSituation()
  }

  /**
   * Event click modal show
   */
  handleEventClick(clickInfo: EventClickArg) {
    this.editEvent = clickInfo.event;
    this.formEditData = this.formBuilder.group({
      editTitle: clickInfo.event.title,
      editCategory: clickInfo.event.classNames[0],
    });
    this.modalService.open(this.editmodalShow);
  }

  /**
   * Events bind in calander
   * @param events events
   */
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private serv :CalendarService,
    private tokenService:TokenStorage
  ) {

  }

  get form() {
    return this.formData.controls;
  }

  /**
   * Delete-confirm
   */
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.deleteEventData();
        Swal.fire('Deleted!', 'Event has been deleted.', 'success');
      }
    });
  }

  position() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been saved',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  /**
   * Event add modal
   */
  openModal(event?: any) {
    this.newEventDate = event;
    this.modalService.open(this.modalShow);
  }

  /**
   * save edit event data
   */
  editEventSave() {
    const editTitle = this.formEditData.get('editTitle').value;
    const editCategory = this.formEditData.get('editCategory').value;
    
    const editId = this.calendarEvents.findIndex(
      (x) => x.id + '' === this.editEvent.id + ''
    );

    this.editEvent.setProp('title', editTitle);
    this.editEvent.setProp('classNames', editCategory);

    this.calendarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      id: this.editEvent.id,
      classNames: editCategory + ' ' + 'text-white',
    };

    this.position();
    this.formEditData = this.formBuilder.group({
      editTitle: '',
      editCategory: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Delete event
   */
  deleteEventData() {
    this.editEvent.remove();
    this.modalService.dismissAll();
  }

  /**
   * Close event modal
   */
  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
    });
    this.modalService.dismissAll();
  }

  getListSituation() {
    this.serv.GetChambreByCode(this.tokenService.getUser().cod_soc,
    this.tokenService.getUser().matpers).subscribe(
      (data: any[]) => {
        this.rowData = data;
        this.events=data.map((e:any)=>({title:e.lib_mot,start:e.dateC,color:"orange"}))


        this.calendarOptions = {
          headerToolbar: {
            left: 'dayGridMonth,dayGridWeek,dayGridDay',
            center: 'title',
            right: 'prevYear,prev,next,nextYear'
          },
          initialView: "dayGridMonth",
          themeSystem: "bootstrap",
          eventSources: this.events,
          events: this.events,
          weekends: true,
          editable: true,
          selectable: true,
          selectMirror: true,
          dayMaxEvents: true,
          dateClick: this.openModal.bind(this),
          eventClick: this.handleEventClick.bind(this),
          eventsSet: this.handleEvents.bind(this),
          eventTimeFormat: { // like '14:30:00'
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
            hour12: true
          }
      
        };


        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Save the event
   */
  // saveEvent() {
  //   if (this.formData.valid) {
  //     const title = this.formData.get('title').value;
  //     const className = this.formData.get('category').value;
  //     const calendarApi = this.newEventDate.view.calendar;
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: this.newEventDate.date,
  //       end: this.newEventDate.date,
  //       className: className + ' ' + 'text-white'
  //     });
  //     this.position();
  //     this.formData = this.formBuilder.group({
  //       title: '',
  //       category: '',
  //     });
  //     this.modalService.dismissAll();
  //   }
  //   this.submitted = true;
  // }

  /**
   * Fetches the data
   */
  private _fetchData() {
    // Event category
    //this.category = category;
    // Calender Event Data
   // this.calendarEvents = calendarEvents;
    // form submit
    this.submitted = false;
  }


}
