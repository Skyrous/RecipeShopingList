export class Recipe {
  public nameOfRecipe: string;
  public description: string;
  public imagePath: string;
  constructor(nameOfRecipe: string, description: string, imagePath: string) {
    this.nameOfRecipe = nameOfRecipe;
    this.description = description;
    this.imagePath = imagePath;
  }
}
