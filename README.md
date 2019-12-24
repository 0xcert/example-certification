This is an example of how to use certification in 0xcert framework v2.

The example is wrapped in a simple UI to showcase the functionalitites. Certification principles showed here are needed for most other guides but are not exclusive for 0xcert framework but can be used in non blockchain related applications as well.
Main logic is isolated in `src/example.ts` while response handling is located in `index.ts`. The basic configuration needed for communication can be found in `src/config.ts` file.

To keep the example as simple as possible there are some hardcoded values like the definition of schema and exmaple metadata we are using. You can change those in `src/config.ts`. There are also some other empty variables needed for the example logic.

Project stucture:

| Path           | Description                                   |
| -------------- | --------------------------------------------- |
| src/example.ts | Main logic showing the use.                   |
| src/config.ts  | Configuration file.                           |
| index.html     | Front end styling.                            |
| index.ts       | Controller connecting front end to the logic. |
| package.json   | Dependencies.                                 |
| style.css      | Front end styling.                            |
