This is an example of how to use certification within the 0xcert Framework v2.

The example is put in the context of a simple UI to showcase its functionalities. The certification principles demonstrated in this example are needed for most other guides, however, they are not exclusive to the 0xcert Framework and can be used in non-blockchain-related applications, as well.

The main logic is isolated in the `src/example.ts` file while response handling is located in `index.ts`. The basic configuration needed for communication can be found in the `src/config.ts` file.

To keep the example as simple as possible, some values are hardcoded, such as the definition of schema and the example metadata being used. You can change those in the `src/config.ts` file. The example logic also requires some other empty variables.

Project structure:

| Path           | Description                                   |
| -------------- | --------------------------------------------- |
| src/example.ts | Main logic showing the use.                   |
| src/config.ts  | Configuration file.                           |
| index.html     | Front-end styling.                            |
| index.ts       | Controller connecting front-end to the logic. |
| package.json   | Dependencies.                                 |
| style.css      | Front-end styling.                            |
