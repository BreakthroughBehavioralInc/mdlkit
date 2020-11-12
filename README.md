# mdlkit

MDLIVE's design system

## Getting Started
To install and publish a package, you will need a Github personal access token.
1. Create a Github *[personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token#creating-a-token) with access to the `repo`, `read:packages`, and `write:packages` scopes.
2. Create or edit your npmrc (`~/.npmrc`) replacing TOKEN with your personal access token

```sh
@BreakthroughBehavioralInc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

## Installing
Packages are available *[here](https://github.com/BreakthroughBehavioralInc/mdlkit/packages)

1. Add the following to the `.npmrc` in the root of your project
```sh
@breakthroughbehavioralinc:registry=https://npm.pkg.github.com
```

2. Install the package

```sh
npm install @breakthroughbehavioralinc/mdlkit
```

or

```sh
yarn add @breakthroughbehavioralinc/mdlkit
```

## Publishing a package

1. Login to the package registry
```sh
npm login --registry=https://npm.pkg.github.com
```
- Your username is your github username.
- Your password is your github personal access token.


2. Publish!
```sh
npm publish
```

[source](https://dev.to/jgierer12/how-to-publish-packages-to-the-github-package-repository-4bai)
