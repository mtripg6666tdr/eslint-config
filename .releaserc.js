module.exports = {
  branches: [
    "main",
    {
      name: "develop",
      channel: "dev",
    }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          {
            breaking: true,
            release: "major",
          },
          {
            type: "Docs",
            scope: "README",
            release: "patch"
          },
          {
            type: "Fix",
            release: "patch"
          },
          {
            type: "Chore",
            release: "patch"
          },
          {
            type: "chore",
            release: "patch"
          },
          {
            type: "Feat",
            release: "minor"
          },
          {
            type: "Perf",
            release: "patch"
          },
          {
            type: "Improve",
            release: "patch"
          },
          {
            type: "Change",
            release: "minor"
          },
          {
            type: "Update",
            release: "patch"
          },
          {
            type: "update",
            release: "patch"
          },
          {
            type: "Add",
            release: false
          },
          {
            type: "Remove",
            release: "minor"
          },
          {
            type: "Rename",
            release: false
          },
          {
            type: "Revert",
            release: "minor"
          },
          {
            scope: "no-release",
            release: false
          }
        ],
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "docs",
              section: "Documentation"
            },
            {
              type: "fix",
              section: "Bug fixes"
            },
            {
              type: "chore",
              section: "Chore"
            },
            {
              type: "feat",
              section: "Features"
            },
            {
              type: "perf",
              section: "Improvements"
            },
            {
              type: "improve",
              section: "Improvements"
            },
            {
              type: "change",
              section: "Changes"
            },
            {
              type: "update",
              section: "Dependencies"
            },
            {
              type: "add",
              hidden: true
            },
            {
              type: "remove",
              section: "Changes"
            },
            {
              type: "rename",
              hidden: true
            },
            {
              type: "revert",
              section: "Changes"
            }
          ]
        }
      }
    ],
    // "@semantic-release/npm",
    // [
    //   "@semantic-release/github",
    //   {
    //     addReleases: "bottom"
    //   }
    // ]
  ],
  parserOpts: {
    noteKeywords: [
      "BREAKING CHANGE",
      "BREAKING CHANGES",
      "BREAKING"
    ],
    notesPattern: (pattern) => new RegExp("^[\\s|*]*(" + pattern + ")([:\\s]+)?(.*)"),
  }
}
