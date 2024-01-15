## ☁️ Inspiration
As time passes and generations change, numerous stories often fade into obscurity. We believe that preserving unheard stories not only leaves an individual legacy but also as provides a source of insight for future generations.

In addition, Memori is needed today because of the benefits towards mental health as well as it’s unique capability to pass memories through generations. With over 50% of seniors in elderly homes who suffer with depression and the 13.5% of that due to social isolation, there is an obvious need for contact or some form of communication. Memori solves that problem while also helping bridge the divide between our older and younger generations.

## 🚧 What it does
Preserving memories for generations to come. Memori is a mobile app made for older individuals with two key purposes. First, Memori aspires to bring families closer together by helping older members share their stories and experiences. Second, Memori seeks to alleviate the sense of isolation older members of family may feel when distanced from other members of their family. 

In Memori, each user has their individual profile, their Memories. Once signed in, users can able to begin creating memories. The app starts by suggesting several categories for the user, such as "adolescence, relationships, hobbies, etc." Once the user selects an option, the app generates a question about a life experience for the user to answer. After submitting their response, the app then asks a follow-up question based on the user's response, a feature born out of our group members' personal experience with laconic relatives. Following these two questions, the user will have successfully created a Memori.

Once the user has created a Memori, the app will store the memories in a database, where users can access their Memories in chronological order or by topic. Memori also provides functionality for users to easily share their Memories with other people.  

## 👨🏾‍💻 How we built it
We came up with the idea of Memori after holding a brainstorming session where we built off each others' ideas, merging an idea of a journaling app with an intention of developing an app for the elderly. 

Our next step in building Memori was to draw out a basic outline of our app. With our target audience in mind, we each researched key accessibility features our app needed to have. After discussing, we determined three: large icons and text, intuitive navigation, and an all around simple and clean UI. With these factors in mind, we drew out a high-level overview consisting of screens and their components as well as a website-flow. 

Once we all had a concrete idea, we separated into a groups: one backend developer, two frontend developer, and one UX researcher. 

To create a fluid UI, we used React-Native with Expo. To control navigation, we used React-navigation. For passing data between components, we used ContextAPI. For the text-to-speech accessibility feature, we utilized Expo-Speech. For generating prompts, we use the ChatGPT API. 

For our backend, we used Google Firebase to store all user login info as well as their saved journal entry.

All the images and icons on our app were hand-drawn by our UX researcher. In addition, our UX researcher chose out an easy-to-read font from Google Fonts, "Marcellus."

## 👷 Challenges we ran into
Our greatest challenge was designing an aesthetic UI that felt dynamic, intuitive, and simple while being complex enough to support our application. In our first iteration of Memori, we had many more buttons on each screen, all of which redirected to different screens. One particular design choice we made was to only include the nav-bar at the bottom of our home screen - we had initially planned on having the bar on each screen, giving users the ability to have more control of the app. This was one of many design choices we made to balance out functionality vs. aesthetics. 

## 🎉 Accomplishments that we're proud of
We are most proud of learning how to use React-Native and Firebase. For everyone, these were two new technologies that we had heard of, but not previously used. None of our members had even created a mobile app before. However, by consulting with mentors at SBHacks and watching countless online tutorials, we successfully leveraged these previously-mystifying technologies to build a clean and meaningful application. 

## 📙 What we learned
By creating Memori, our group members gained several skills and learned countless lessons. In terms of skills, we learned how to develop a mobile app using React-Native and Firebase. With regard to the lessons, we further strengthened our understanding of the design process. In hindsight, it was essential for us to spend lots of time brainstorming and drawing the details of our application, even though there was no tangible progress being made. We went through several iterations of Memori and in the end created a robust and worthwhile product. 

## 🔜 What's next for Memori
1. More accessibility features: Speech-to-text, Language Support, Font Size editor, High Contrast Mode, etc. 
2. Custom trained LLM on asking "open ended" questions. 
3. Sharing multiple memories at once. 
4. Interaction with other users
