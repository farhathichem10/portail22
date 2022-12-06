import { Component, OnInit } from '@angular/core';
import { GridApi } from "ag-grid-community";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { ComptepersService } from '../comptepers.service';
import { ValeurficheevalService } from '../valeurficheeval.service';
@Component({
  selector: 'app-aggridficheevalcomp',
  templateUrl: './aggridficheevalcomp.component.html',
  styleUrls: ['./aggridficheevalcomp.component.scss']
})
export class AggridficheevalcompComponent implements OnInit {

  x:any
  list:any=[]

  title = "grid";
  api!: GridApi;
  rowData: any[] = [];

  constructor(private serv: ComptepersService,private tokenService:TokenStorage,private serv2:ValeurficheevalService) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }}
 