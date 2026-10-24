# PokéTerminal

A terminal-based Pokédex built with TypeScript and the [PokéAPI](https://pokeapi.co/).

## Motivation

PokéTerminal was created as a learning project to practice TypeScript, asynchronous programming, API integration, and state management.

Inspired by the Pokémon games, this project brings the core Pokédex experience to the terminal, allowing users to explore locations, catch Pokémon, inspect their details, and keep track of their collection.

## Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (version 22.15.0)
* npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd pokedex
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

## Usage

Once the application starts, enter commands in the terminal to interact with your Pokédex.

| Command              | Description                                                 | Example                      |
| -------------------- | ----------------------------------------------------------- | ---------------------------- |
| `help`               | Lists available commands.                                   | `help`                       |
| `map`                | Displays the next page of location areas.                   | `map`                        |
| `mapb`               | Displays the previous page of location areas.               | `mapb`                       |
| `explore <location>` | Explores a location area and lists the Pokémon found there. | `explore pastoria-city-area` |
| `catch <pokemon>`    | Attempts to catch a Pokémon.                                | `catch pikachu`              |
| `inspect <pokemon>`  | Displays details about a Pokémon you have caught.           | `inspect pikachu`            |
| `pokedex`            | Lists all Pokémon you have caught.                          | `pokedex`                    |
| `exit`               | Exits the application.                                      | `exit`                       |

Pokémon encounters and catches depend on the data returned by the PokéAPI and the catch probability implemented in the application.

The caught Pokémon collection is stored in memory and is reset when the application exits.

## Contributing

This project is primarily a learning exercise, but suggestions and constructive feedback are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a branch for your changes.
3. Make your changes and test them.
4. Open a pull request describing your improvements.

Thanks for checking out PokéTerminal!
