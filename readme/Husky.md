## Husky

We used husky for customizing git hooks, which run automatically when specific events occur. There are client-side hooks which are triggered on actions such as committing or merging. Server-side hooks run in situations such as receiving push data from the client.

We used this to prevent developers from pushing inconsistent code on git repository. If a problem is found, Husky will stop the process and commit will fail. On the other hand, if no problem is found, git commit will run as usual. This runs automatically whenever we commit our code. It uses `.huskyrc` for hook rules. In this project husky checks for the Linting Issues and Unit Test cases.


## Lint-staged

Lint-staged can be used to run multiple command and it can also check staged files only and add it to stage so we only commit code that pass the test.Lint staged only checks staged files. If error is found but fixable with --fix, Lint-staged will fix it, but if not, husky will stop the process.
