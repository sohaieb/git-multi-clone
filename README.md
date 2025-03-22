# git-multi-clone

### Project Description
The **GitMultiClone** project simplifies cloning multiple Git repositories at once using a JSON configuration file.

### Installation and Usage

1. **Install Dependencies:**
   ```bash
   bun install
   ```

2. **Clone Repositories:**
   ```bash
   bun run index clone --file <path_to_repos_json_file> --target <output_directory>
   ```
   Replace `<path_to_repos_json_file>` with the actual path to your repositories JSON file and `<output_directory>` with the desired directory where the repositories will be cloned.

3. **Help:**  For more options and details, use the help command:
   ```bash
   bun run index clone --help
   ```

### Configuration File (repositories.json)

The `repositories.json` file should contain an array of repository URLs.  For example:

```json
[
  "https://github.com/owner/repo1.git",
  "https://github.com/owner/repo2.git",
  "https://gitlab.com/owner/repo3.git"
]
```


### Example

To clone the repositories listed in `repos.json` to the `cloned_repos` directory:

```bash
bun run index clone --file repos.json --target cloned_repos
```

### Development

This project was created using `bun init` in bun v1.2.6.  [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

