import express from 'express';

import { getRecipe, getRecipes, newRecipe, searchRecipes } from './routes/recipes';

const apiRouter = express.Router();

apiRouter.get('/recipes', getRecipes);
apiRouter.get('/recipe/:id', getRecipe);
apiRouter.get('/search', searchRecipes);

apiRouter.post('/upload', newRecipe);

export default apiRouter;
