import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ContactRoutes } from './contacts/index';
import { SupportRoutes } from './support/index';
import { FeedRoutes } from './feed/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...ContactRoutes,
    ...SupportRoutes,
    ...FeedRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
