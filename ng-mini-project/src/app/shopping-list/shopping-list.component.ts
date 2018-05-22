import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slSvc: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slSvc.getIngredients();
    this.slSvc.ingredientsChanged.subscribe(
      ((ingredients: Ingredient[])=> {
        this.ingredients = ingredients;
      })
    );
  }
}
