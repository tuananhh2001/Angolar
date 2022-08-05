import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  news:any[] = []
  constructor(private artS: ArticlesService) {
    artS.getData().subscribe((data)=>{
      this.news = []
      for(let itemData of data){
        this.news.push(itemData)
      }
    })
    
  }

  ngOnInit(): void {
  }

}
