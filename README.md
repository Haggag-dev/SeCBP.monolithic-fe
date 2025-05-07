# Monolithic Frontend

This is the monolithic frontend (`monolithic-fe`) of my bachelor/graduation project.

# Application

More details about the application will be documented soon. However, an overview of the entire application, including more details on the backend, is already available [here](https://github.com/Haggag-dev/SeCBP.back-end?tab=readme-ov-file#bachelorgraduation-project).

## Instruction for Running the Frontend

_⚠ Please follow the order of the following instructions_

### Pre-requistes
- If you do not have the backend installed and running yet, please follow the instructions provided through [this link](https://github.com/Haggag-dev/SeCBP.back-end?tab=readme-ov-file#instructions-for-running-the-back-end) before proceeding further.
- [Install pnpm.](https://pnpm.io/installation)

### Running the Application

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.monolithic-fe
2. Then execute the following commands:
```sh
  cd SeCBP.monolithic-fe

  pnpm i

  pnpm build

  docker compose -p monolithic-fe up
```

_Finally, browse to http://localhost:5001/products_
