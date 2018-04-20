import { Request, Response } from 'express';

const getRecipe = (req: Request, res: Response) => {
  const { id } = req.params;
};

const getRecipes = (req: Request, res: Response) => {
  res.send('Here be one recipe');
};

const newRecipe = (req: Request, res: Response) => {
  console.log('What is the upload request: ', req);
  res.send(['Here is the uploaded recipe']);
}

const searchRecipes = (req: Request, res: Response) => {
  console.log('What is the req: ', req.query);

}

export { getRecipe, getRecipes, newRecipe, searchRecipes };
