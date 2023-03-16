import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'Fresh for breakfast',
      'https://www.realsimple.com/thmb/u0FflZ0sazXanhitWueM3LaXkaw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-pancakes-step-by-step-bf45f02d4b3c4392bddf92e05c9e17eb.jpg'
    ),
    new Recipe(
      'Nicoleta',
      'Fresh Pussy',
      'https://media.glamour.com/photos/5695e03b93ef4b09520f2f19/master/w_1600%2Cc_limit/inspired-2016-01-peach-app-fruit-getty-main.jpgs'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
