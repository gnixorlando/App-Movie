import { Fragment } from "react";
import { MainMenu } from "./MainMenu";

export function Header() {
    return (
      <Fragment>
        <h1> Aplicação de filmes</h1>
        <MainMenu />
      </Fragment>
    );
}