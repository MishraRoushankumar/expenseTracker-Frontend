import React from "react";

type AuthHeaderProps = {
  title: string;
  description: string;
};

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>{" "}
    </header>
  );
}
