// import {Content} from "./content-interface";
//
// class ContentList {
//   static contentCount = 0;
//   private _items: Content[];
//   constructor(item: Content) {
//     this._items = []; // initialize array
//     this._items[0] = item;
//     this.increaseCount();
//   }
//   increaseCount() {
//     return ++ContentList.contentCount;
//   }
//    get items(): Content[]{
//    return this._items;
// }
// }
//
//
import { Content } from "./content-interface";
export class ContentList {
  CricketerListarray: Array<Content>;


  constructor ()
  {
    this.CricketerListarray=[];
  }

  CricketerlistConst(){
    return this.CricketerListarray;
  }

  AddCricketerFunction(newcricketer:Content){
    this.CricketerListarray.push(newcricketer);
  }

  CricketerListCount(){
    return this.CricketerListarray.length;
  }

  CricketerInputFunction(id:number){
    const cricket= this.CricketerListarray[id];
    return "<h1> CricketerListDisplay </h1>" + cricket.title;
  }
}
