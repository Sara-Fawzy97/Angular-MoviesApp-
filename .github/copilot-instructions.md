<!-- Auto-generated guidance for AI coding agents working on MovieApp -->

# Guidance for AI coding agents working on this repo

**Purpose**: Help an AI contributor quickly become productive in this Angular (v14) MovieApp by documenting architecture, developer workflows, conventions, and notable gotchas discovered in the codebase.

**Quick Start**
- **Install**: `npm install`
- **Dev server**: `npm start` (runs `ng serve`, default port `4200`).
- **Build**: `npm run build` — output is written to `docs/movie-app` (see `angular.json` `outputPath`). This repository's build target is configured for publishing the `docs/` folder (likely GitHub Pages).
- **Tests**: `npm test` (Karma + Jasmine using `karma.conf.js`).

**Where to look first (key files/dirs)**
- `angular.json`: build/serve/test configurations; note `outputPath: "docs/movie-app"` and `fileReplacements` for production.
- `package.json`: developer scripts (`start`, `build`, `test`, `watch`).
- `src/app/app-routing.module.ts`: main routing and lazy-loading conventions (many feature routes use `loadChildren`).
- `src/app/app.module.ts`: root NgModule — currently imports many feature modules directly.
- `src/app/views/`: feature folders; many features are organized as their own modules (lazy-load-able).
- `src/app/shared/services/`: app-wide services (API calls to TMDB are centralized here).
- `src/app/Interfaces/`: TypeScript interfaces for API responses (`mediaInterface.ts`, `genresInterface.ts`, ...).

**Big-picture architecture & patterns**
- Feature modules: Most views are implemented as self-contained modules under `src/app/views/**` and intended to be lazy-loaded via `app-routing.module.ts` using `loadChildren` with dynamic imports.
- Shared layer: UI components (navbar, footer, skeleton loader, sidebar) live in `src/app/shared/layouts/`. Services live in `src/app/shared/services/` and are `providedIn: 'root'`.
- API layer: Services call TheMovieDB endpoints directly (base URLs and `api_key` concatenated in service files). Responses are typed using the project's `Interfaces` types.

**Important conventions & repo-specific notes**
- API key handling: TheMovieDB API key is hard-coded in `movies.service.ts` and `tv-shows.service.ts`. This is a secret and should be moved to `src/environments/environment.ts` and referenced as `environment.tmdbApiKey` before changing or committing. Production replacement is configured in `angular.json`.
- Lazy-loading vs eager imports: `app-routing.module.ts` configures many routes using `loadChildren` (lazy loading). However, `app.module.ts` also imports many of the same feature modules. To truly lazy-load a feature, remove it from `AppModule` imports — but do not do that automatically; confirm behavior and test the dev server after any change.
- Output target: builds go to `docs/movie-app` (not `dist/`), so CI or publish scripts may expect the `docs/` folder to contain the built site.
- Tailwind + PostCSS: Tailwind is used (`tailwind.config.js`, `postcss`/`autoprefixer` present). When updating styles, run the build so tailwind utilities regenerate into `src/styles.css` processing.

**Common tasks & examples (use these exact patterns)**
- Call service from a component:
  - `this.moviesService.getPopularMovies(1).subscribe(res => { /* handle res */ })`
- Add a lazy route: follow existing pattern in `app-routing.module.ts`:
  - `{ path:'movie', loadChildren:()=>import('./views/popular-movies/popular-movies/popular-movies.module').then(m=>m.PopularMoviesModule) }`
- Use interfaces for HTTP typing: services return `this.http.get<Media[]>(...)` — preserve that generic typing when modifying services.

**Pitfalls and gotchas to watch for**
- Query string bugs: some search helpers build `&query=$` instead of `&query=` (see `getMultiSearched` and `getTvSearched`) — validate and fix by removing the stray `$` before using.
- Secrets in code: do not commit replacements of the API key into source files; prefer `environment.ts`. If asked to refactor, update `environment.ts` and `environment.prod.ts` and `angular.json` file replacement mapping.
- Double inclusion of modules: Because many feature modules are both imported in `AppModule` and referenced via lazy `loadChildren`, changing imports may change bundle size and behavior. Test with `npm start` after modifications.

**Testing & debugging tips**
- Run `npm test` to execute unit tests with Karma. Use the browser UI or headless mode depending on `karma.conf.js`.
- For runtime debugging, launch dev server `npm start` and use browser devtools (Angular devtools recommended). Changes to lazy-loaded module imports often require a full restart of `ng serve`.

**When editing files — checklist for PRs**
- Preserve typings from `src/app/Interfaces/` when touching the API layer.
- Move secrets into `src/environments/*` and update `angular.json` `fileReplacements` if altering production behavior.
- If converting a module to true lazy-load (remove from `AppModule` imports), run `npm start` and verify routes load correctly and the dev bundle is as expected.

If any of the above sections are unclear or you want examples added (e.g., exact environment variable names or a small refactor PR to externalize the API key), tell me which part to expand and I will update this file.
