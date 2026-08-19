# web-page-exercises
# WCB PDF-to-Web Tasks

Two separate implementations are included:

1. Worker_Progress_Report/
   - index.html
   - style.css
   - script.js
   - wcb-logo.png

2. Medical_Travel_Expense_Request/
   - index.html
   - style.css
   - script.js
   - wcb-logo.png

Open either index.html directly in a browser. For a PDF-like result, use
Print -> Paper size A4 -> Margins None/Default as needed -> Scale 100%.
Both documents use a continuous single-page layout and the supplied WCB logo
extracted from the provided PDFs.

Dynamic demonstration
----------------------
Each page has a screen-only "Demo data" selector in the top-right corner.
Use it to switch between a completed sample and a second data set. The
Worker Progress Report updates the worker and response values. The Medical
Travel Expense Request renders every table from JavaScript arrays, so the
number of rows can change without editing the HTML. Blue submitted values can
also be edited directly in the browser; selecting another demo data set
reloads the corresponding sample values.

Submission support
------------------
VIDEO_SCRIPT.md contains a timed narration outline for one two-minute video
per exercise. PROMPT_HISTORY.md records the AI-assisted development prompt
used for this repository. A browser screen recording still needs to be made
from these pages because video capture and narration are external to HTML,
CSS, and JavaScript.
