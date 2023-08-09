## Type labels
- `~"type::bug"` - Defects in shipped code and fixes for those defects.
  - `~"bug::performance"` - Performance defects or response time degradation.
  - `~"bug::availability"` 
  - `~"bug::vulnerability"` - Defects related to Security Vulnerabilities.
  - `~"bug::mobile"` - Defects encountered on Mobile Devices.
  - `~"bug::functional"` - Functional defects resulting from feature changes.
  - `~"bug::ux"` - Unexpected and unintended behavior that is detrimental to the user experience.
- `~"type::feature"` - Effort to deliver new features, feature changes & improvements.
  - `~"feature::addition"`
  - `~"feature::enhancement"`
  - `~"feature::consolidation"`
- `~"type::maintenance"` - Upkeeping efforts & catch-up corrective improvements that are not Features nor Bugs. This includes removing or altering feature flags, removing whole features, merge requests that only include new specs or tests, documentation updates/changes (not including new documentation), restructuring for long-term maintainability, stability, reducing technical debt, improving the contributor experience, or upgrading dependencies and packages.
  - `~"maintenance::refactor"` - Simplifying or restructuring existing code or documentation .
  - `~"maintenance::removal"` - Deprecation and removal of a functionality when it's no longer needed.
  - `~"maintenance::dependency"` - Dependency updates and their version upgrades.
  - `~"maintenance::usability"` - General improvements to product usability that are unrelated to feature prioritization.
  - `~"maintenance::test-gap"` - Test coverage improvements that were not included in feature prioritization.
  - `~"maintenance::pipelines"` - Pipeline related changes.
  - `~"maintenance::workflow"` - Improvements of the engineering tooling like linters, issue templates, etc.

## Workflow labels
Issues and MRs use the following workflow labels to specify the current status:

- `~"workflow::blocked"`
- `~"workflow::complete"`
- `~"workflow::feature-flagged"`
- `~"workflow::development"`
- `~"workflow::review"`
- `~"workflow::planning breakdown"`
- `~"workflow::problem validation"`
- `~"workflow::production"`
- `~"workflow::ready for design"`
- `~"workflow::ready for development"`
- `~"workflow::refinement"`
- `~"workflow::scheduling"`
- `~"workflow::solution validation"`
- `~"workflow::backlog validation"`
- `~"workflow::verification"`

## Specialization labels
These labels narrow the specialization on a unit of work.

- `~"frontend"`
- `~"backend"`
- `~"documentation"`
  
## Priority labels
We have the following priority labels:

- `~"priority::1"` - Urgent
- `~"priority::2"` - High
- `~"priority::3"` - Medium
- `~"priority::4"` - Low

## Severity labels
We have the following severity labels:

- `~"severity::1"` - Blocker
- `~"severity::2"` - Critical
- `~"severity::3"` - Major
- `~"severity::4"` - Low
