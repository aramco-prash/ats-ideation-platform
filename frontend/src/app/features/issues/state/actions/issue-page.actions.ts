import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";
import { Project } from "@core/interfaces/project";

export const loadIssues = createAction(
  '[Issue Page] Load',
  props<{ projectId: string }>()
);

export const createIssue = createAction(
  '[Issue Page] Create',
  props<{ issue: Issue, project: Project }>()
);

export const updateIssue = createAction(
  '[Issue Page] Update Issue',
  props<{ issue: Issue }>()
);
