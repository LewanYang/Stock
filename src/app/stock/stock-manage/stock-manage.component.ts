import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks=[
      new Stock(1,"股票A",1.3,3.5,"贵州茅台",["IT","cloud"]),
      new Stock(2,"股票B",2.4,2,"贵州茅台",["IT"]),
      new Stock(3,"股票C",0.4,1.5,"贵州茅台",["IT","cloud"]),
      new Stock(4,"股票D",12.4,3.5,"贵州茅台",["cloud"]),
      new Stock(5,"股票E",15.2,3.5,"贵州茅台",["IT","cloud"]),
      new Stock(6,"股票F",88,4.0,"贵州茅台",["cloud"]),
      new Stock(7,"股票G",7.2,3.0,"贵州茅台",["IT","cloud"]),
      new Stock(8,"股票H",3,3.5,"贵州茅台",["IT","Finace"]),
    ]
  }

}

export class Stock{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>){

  }
}
