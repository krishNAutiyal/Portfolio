import project1 from "../assets/projects/p1.png";
import project2 from "../assets/projects/p2.png";
import project3 from "../assets/projects/p3.png";

export const ABOUT_TEXT = `Hello👋 I am Krishna Nautiyal, a student at Graphic Era Hill University, Batch of 2025 , I am a dedicated and versatile full-stack developer and competitive programmer with a passion for creating efficient and user-friendly web applications. With 1/2 years of experience, I have worked with a variety of technologies, including React , NextJs , NodeJs , MongoDB , Tailwind CSS etc. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of full-stack development, I enjoy my most of time in competitive programming and improve my Data Structure and Algorithm and Problem Solving Skills .`;

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    title: "Resume builder",
    image: project1,
    description:
      "This project is an interactive Resume Builder that lets users create, customize, and download professional resumes in real-time with a live preview.It simplifies resume creation with intuitive forms, styling options, and instant PDF export, helping job seekers present their skills effectively.",
    technologies: ["HTML5", "CSS3", "Javascript"],
    github : "https://github.com/krishNAutiyal/Resume_Builder.",
    livelink : "https://krishnautiyal.github.io/Resume_Builder./",
  },
  {
    title: "Volume Gesture",
    image: project2,
    description:
      "This project uses MediaPipe and OpenCV to detect hand gestures via webcam, mapping the distance between thumb and index finger to system volume with Pycaw. It demonstrates real-time interaction for touchless control.",
    technologies: ["Python","MediaPipe", "OpenCV", "Pycaw","Numpy"],
    github : "https://github.com/krishNAutiyal/volume-control-by-gesture",
    livelink : "https://youtu.be/gc8GOsZY-I0?si=Whz4ynBDSUKkB7k9",
  },
  {
    title: "Brick Break Game",
    image: project3,
    description:
      "This Breakout game project demonstrates my Java and OOP skills through a fully functional arcade-style game. I implemented core mechanics like paddle control, ball physics, and collision detection using Java Swing, while maintaining clean, modular code architecture. The project highlights my ability to develop interactive applications and solve real programming challenges in game development.",
    technologies: ["Java", "Java Swing", "Object-Oriented Programming (OOP)", "2D Game Development", "Collision Detection"],
    github : "https://github.com/krishNAutiyal/Brick-Break-Game",
    livelink : "https://youtu.be/c63UcxSWIAo?si=uATzT8HlTJXGds4Z",
  },
];

export const CONTACT = {
  address: "Dehradun , Uttrakhand , INDIA, 248008 ",
  email: "krishnautiyal4444@gmail.com",
};
