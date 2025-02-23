# Introduction

This project aims to facilitate learning from YouTube videos by providing automatic assessment generation based on the video content.

When a user shares a YouTube link:
- The platform extracts chapters from the video and generates summaries for each chapter using the transcript.
- Users can query the platform if they encounter difficulties understanding certain concepts.
- Assessments are generated based on the content covered in each chapter, aiding in efficient learning.

# Installation
  -clone repository
  ```bash
  git clone https://github.com/TaherTadpatri/youtubeLearning.git
  ```
### Frontend
-   ```bash
  cd frontend
  ```
  install dependencies
  ```bash
  npm install
  ```
  run server
  ```bash
  npm run dev
  ```

### Backend
- Django

### Dependencies

Install all necessary dependencies. Additionally, install the following:
- Ollama: [https://ollama.com/](https://ollama.com/) (also install via pip)
- install the desired model recommended (deepseek)
- Question and Answer Generation Model: [GitHub](https://github.com/KristiyanVachev/Leaf-Question-Generation)
  download the github repo and place it  ./backend/app/


# Result
1.Chapters of the youtube video
    ![home page with the chapters name](home.jpeg)
2.Summary of the chapter
   ![summary of the chapter](summary.jpeg)
3.Query
  ![query](query.jpeg)
4.Assessment
  ![Assessment](assessment.jpeg)


