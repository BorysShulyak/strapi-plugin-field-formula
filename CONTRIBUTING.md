# Contributing to Strapi Plugin Field Formula
Thank you for taking an interest in contributing! We appreciate you! 🫶🏽

Below are the guidelines on how to help in the best possible way.

## Submitting an Issue
Before creating a new issue, please search through open issues using the 
[GitHub issue search bar](https://docs.github.com/en/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests). 
You might find the solution to your problem, or can verify that it is an already known issue.

We want a bug-free and best-performing project. That's why we take all reported issues to heart. But please be aware 
that if we can't reproduce the problem, we won't have a way of locating and adequately fixing it.

Therefore, to solve the problem in the best possible way, please create a minimal repository that reproduces the 
problem with the least possible code explaining and demonstrating the error.

Without enough information to reproduce the issue, we will close it because we can't recreate and solve it.

Make sure the appropriate labels are added Read more information about 
[issue and pull request labels](https://github.com/BorysShulyak/strapi-plugin-field-formula/blob/main/documentation/LABELS.md)

## Submitting a Pull Request (PR)
### Branch Organization
We adopt [trunk-based development](https://trunkbaseddevelopment.com/) therefore all Pull Requests are made against the 
main branch because we do not use separate branches for development or for the versions we release.

### Good first issue
The issues marked with `~"good first issue"` label are a good starting point to familiarize yourself with the project.

Before solving the problem, please check with the maintainers that the issue is still relevant. Feel free to leave a 
comment on the issue to show your intention to work on it and prevent other people from unintentionally duplicating 
your effort.

### Sending a Pull Request
Before submitting a pull request, consider `MR checklist` is fully resolved. You could find it in the PR template. For
more information you could read the [CODE_REVIEW document](https://github.com/BorysShulyak/strapi-plugin-field-formula/blob/main/documentation/CODE_REVIEW.md).

## Local development
Clone repository:
```shell
git clone git@github.com:BorysShulyak/strapi-plugin-field-formula.git
```

If you want to open a PRs you could fork the repository. For more information read the following docs: 
[Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), 
[Contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

### The list of commands
Install dependencies:
```shell
yarn
```

Run linters:
```shell
yarn run lint
```

Run linters with autofix:
```shell
yarn run lint-fix
```

Run tests:
```shell
yarn run test
```

Run commit:
```shell
yarn run commit
```

## Conventional commits
We are using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in this repo. To automate this
process we have integrated the [commitlint](https://github.com/conventional-changelog/commitlint) to check if your 
commit messages meet the conventional commit format.

Running the `commit` command would ask you a few questions to generate the commit message following the next rules of
`@commitlint/config-conventional`. [Read more.](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).