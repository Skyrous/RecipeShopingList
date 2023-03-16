export class Recipe {
  private nameOfRecipe: string;
  public getNameOfRecipe(): string {
    return this.nameOfRecipe;
  }
  public setNameOfRecipe(value: string) {
    this.nameOfRecipe = value;
  }
  private description: string;
  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string) {
    this.description = value;
  }

  private imagePath: string;
  public getImagePath(): string {
    return this.imagePath;
  }
  public setImagePath(value: string) {
    this.imagePath = value;
  }
  constructor(nameOfRecipe: string, description: string, imagePath: string) {
    this.nameOfRecipe = nameOfRecipe;
    this.description = description;
    this.imagePath = imagePath;
  }
}
