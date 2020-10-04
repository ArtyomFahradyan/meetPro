# Contributing

In order to contribute to this project:

* **If you are working on a new feature:**

  * Create a new branch from `develop`
  * Commit your changes to that branch
  * Run `yarn lint` in the project root
  * Open a pull request against the `develop` branch
  * Resolve merge conflicts (if any)
  
* **If you are working on a bug fix:**
  
  * Create a new branch from `master`
  * Commit your changes to that branch
  * Run `yarn lint` in the project root
  * Open a pull request against the `master` branch
  * Open another pull request against the `develop` branch
  * Resolve merge conflicts (if any)

After your pull request passes CI validations, it will go through code review and get processed accordingly.

## Naming Conventions

In order to keep the git log clean and consistent, please follow these conventions.

### Branch Names

Branches should be named using the following format:

`{token}/{jira-number}?/{task-description}`

**Token can be:**

  * `feature`: Tasks to be merged into `develop` for the next release
  * `hotfix`: Critical bug fixes to be merged into `develop` and `master`
  * `release`: Staging to be merged into `develop` and `master`
 
**Please use short and meaningful descriptions for your branch names and use dashes (`-`) as the delimeter.**

**Jira ticket number is optional**

#### Examples

`feature/HOORY-751/signup-form`

`hotfix/email-validation`

### Commits

Please try your best to follow these conventions when it comes to commit messages:

#### 1. Capitalize the subject line

This is as simple as it sounds. Begin all subject lines with a capital letter.

##### Example:

`Accelerate to 88 miles per hour`

##### Instead of:

`accelerate to 88 miles per hour`

#### 2. Do not end the subject line with a period

Trailing punctuation is unnecessary in subject lines.

##### Example:

`Open the pod bay doors`

##### Instead of:

`Open the pod bay doors.`

#### 3. Use the imperative mood in the subject line

Imperative mood just means “spoken or written as if giving a command or instruction”. A few examples:

- `Clean your room`
- `Close the door`
- `Take out the trash`

The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that Git itself uses the imperative whenever it creates a commit on your behalf.

For example, the default message created when using `git merge`:

`Merge branch 'myfeature'`

Or when clicking the “Merge” button on a GitHub pull request:

`Merge pull request #123 from someuser/somebranch`

So when you write your commit messages in the imperative, you’re following Git’s own built-in conventions.

##### Example:

- `Refactor subsystem X for readability`
- `Release version 1.0.0`

#### 4. Use brackets to specify the workspace

If the commit contains changes related to a single workspace, specify workspace name before the actual commit message.

##### For example, a commit that contains changes related to the `wizard` workspace would look like this:

`[wizard] Implement signup form`
