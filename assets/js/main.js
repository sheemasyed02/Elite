/**
* Template Name: Moderna - v2.0.1
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#hero').css({
      height: $(window).height()
    });
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);

// Members
function toggleGeneration(genId) {
  // Get all generation containers
  const allGenerations = document.querySelectorAll('.generation-data');
  const allButtons = document.querySelectorAll('.generation-buttons .btn');
  
  // Hide all generations first
  allGenerations.forEach(gen => {
      gen.style.display = 'none';
      gen.classList.remove('active');
  });
  
  // Remove active class from all buttons
  allButtons.forEach(button => {
      button.classList.remove('active');
  });
  
  // Show the selected generation
  const selectedGen = document.getElementById(genId);
  if (selectedGen) {
      selectedGen.style.display = 'block';
      setTimeout(() => {
          selectedGen.classList.add('active');
      }, 10);
      
      // Find and activate the corresponding button
      const activeButton = document.querySelector(`button[onclick*="${genId}"]`);
      if (activeButton) {
          activeButton.classList.add('active');
      }
  }
}

// Function to initialize the default view and add styles
function initializeGenerations() {
  // Show first generation by default
  toggleGeneration('gen1');
  document.head.appendChild(style);
}

// Add event listener for when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGenerations);


//EVENTS
// Event data configuration
const eventsData = {
  event1: {
      title: "Sankranthi Event",
      description: "Certainly! For the Sankranti celebration at KKR and KSR Institute of Technology and Sciences, consider hosting activities such as kite flying competitions, rangoli competitions, cultural performances, and a traditional food festival featuring Sankranti delicacies. Additionally, invite a guest speaker to talk about the significance of Sankranti in Indian culture. Decorating the campus with festive elements will enhance the celebratory atmosphere. These activities will offer students a memorable and culturally enriching experience.", 
      desc: "The Sankranti event at KITS is not just a celebration; it's a testament to the vibrant tapestry of Indian culture, unity in diversity, and the spirit of camaraderie among students. As we come together to celebrate this auspicious festival, let us cherish the traditions, forge new bonds, and create lasting memories that embody the essence of Sankranti - a celebration of life, love, and togetherness.",
      image: "assets/EVENTS/Sankranthi1.jpg"
  },
  event2: {
      title: "AI Sports Meet",
      description: "The AI department organizes a thrilling Sports Day, promoting teamwork and fitness among students and faculty. Various AI-powered gadgets enhance the event, from wearable trackers for performance analysis to automated referee systems ensuring fair play. Students engage in AI-enhanced competitions, showcasing innovative applications in sports analytics and performance optimization. This event fosters a dynamic intersection of technology and athleticism, embodying the spirit of innovation within the AI community.",
      image: "assets/EVENTS/sportsmeet.jpg"
  },
  event3: {
      title: "Peer Learning",
      description: "Classes on peer learning were organized by Mr. Raju Mithra Kantheti, Co-founder and CEO of SolvX Technologies, in collaboration with Dr. Murali, the Head of the AI department. These sessions aimed to facilitate knowledge exchange among students, encouraging them to learn from each other's experiences and expertise in graphic design. Through structured discussions, group projects, and constructive feedback, participants enhanced their understanding and skills in graphic design within the realm of artificial intelligence.",
      desc: "These classes provided a supportive environment for students to collectively explore and master the principles and techniques of graphic design.Peer learning classes offer active engagement, enhanced understanding, and increased retention through explaining concepts to peers. They bring diverse perspectives, develop collaborative and confidence-building skills, and foster a supportive environment for personalized learning. In summary, peer learning enhances learning outcomes through interactive and collaborative approaches.",
      image: "assets/EVENTS/Peer.jpg"
  },
  event4: {
      title: "Lead Section",
      description: "Ms. Kavya conducted a UI/UX class with the support of Dr. G. Murali. The session aimed to delve into the intricacies of user interface and user experience design, emphasizing the importance of intuitive and user-friendly digital interfaces. Through interactive lectures, hands-on exercises, and case studies, participants gained insights into designing effective interfaces that prioritize user needs and enhance overall user satisfaction.",
      desc: "Dr. G. Murali's expertise in the field complemented the sessions, providing valuable insights and guidance to students as they explored various design principles and methodologies. Overall, the class fostered a collaborative learning environment, empowering students to apply their newfound knowledge to real-world design projects and challenges.The AI department student organized an insightful class, fostering collaborative learning and enhancing practical skills in artificial intelligence.",
      image: "assets/EVENTS/Lead1.jpg"
  },
  event5: {
    title: "Faculty Development Program",
    description: "The AI department at KITS College launched a Faculty Development Program to enhance faculty skills in artificial intelligence through workshops and training sessions. The program covers machine learning, AI ethics, data science, and big data analytics, fostering creativity, collaboration, and continuous education among faculty members. It aims to equip educators with the latest AI knowledge, tools, and teaching techniques, promoting interdisciplinary research and industry engagement for preparing students for future job markets.",
    image: "assets/EVENTS/fdp.jpg"
 },
 event6: {
   title: "Atal Faculty Development Program",
   description: "Mr. K. Bapuji conducted the Atal Faculty Development Program (FDP) in the AI department on day four. Dr. N. Samuel conducted an Atal Faculty Development Program (FDP) in the AI department on Day 3 afternoon. Atal FDP conducted by the AI department,led by Mr. Siva Shanker Kantheti, took place on the third morning. Dr. Ramalingaswamy Cheruku conducted a two-day Faculty Development Program (FDP) in the AI department. K. Hasan Ahammad conducted the Atal Faculty Development Programme (FDP) in the AI department on day 5. The final day of the Faculty Development Program (FDP) conducted by the AI department was led by Dr. P. Sai Kiran.",
   image: "assets/EVENTS/atal.jpg"
 },
 event7: {
   title: "Industry Visit",
   description: "Embarking on an illuminating journey, faculty members ventured into the heart of innovation with a captivating industry visit to EA Technology Pvt. Ltd. in Guntur. Amidst the humming machinery and cutting-edge technology, they gleaned invaluable insights, forging bridges between academia and industry. Enveloped in an atmosphere of curiosity and discovery, they witnessed firsthand the symbiotic relationship between theory and practice, igniting sparks of inspiration to enrich their pedagogical endeavors.",
   image: "assets/EVENTS/industry.jpg"
 },
 event8: {
   title: "Workshop on innovative prototype design & development in ROS",
   description: "SoC technology enhances college education in computer science, electrical engineering, and robotics with hands-on learning in electronic system design, IoT, and mobile tech. Projects deepen understanding of digital design, programming, and system architecture, fostering research and career readiness. Mahan, a seasoned Robo cs Product Research Engineer, adept in robo cs development, product lifecycle, IoT integration, and animatronics.",
   image: "assets/EVENTS/work.jpg"
 },
 event9: {
   title: "HACKATHON Robotic Operating System",
   description: "A robotics-focused hackathon unites innovators to create robots addressing real-world challenges through collaboration. Participants design, build, and program robots, pushing technology boundaries for potential industry revolutions and life improvements.Passion for robotics drives creativity, innovation, and exploration of robotic technology, including automation, machine learning, and human-robot interaction. Enthusiasts collaborate to push boundaries, share knowledge, and propel the field forward into new frontiers.",
   image: "assets/EVENTS/hack.jpg"
 },
 event10: {
   title: "Project Expo 1",
   description: "AI Muse is an innovative project merging AI and human creativity to create a collaborative platform with features like creative prompts, AI-enhanced content creation, and personalized recommendations. It emphasizes ethical AI principles, aims to empower creativity, foster collaboration, and advance AI ethics. Future plans include expanding into new domains, integrating emerging technologies, and building a global community, envisioning a future where technology and creativity unite to inspire and empower people worldwide.",
   desc: "Project Expo allows students to present academic projects to peers, faculty, and industry professionals, showcasing creativity, problem-solving skills, and knowledge. It promotes collaboration, innovation, and networking opportunities, offering valuable feedback outside the classroom.",
   image: "assets/EVENTS/project.jpg"
 },
 event11: {
   title: "Project Expo 2",
   description: "Raju Mithra Kantheti, R P V R Sathwik, Vyshnavi Gaddam, and Pavani Narne excelled at the Sanskrit Project Expo, showcasing tradition and innovation. Their 2nd place victory highlighted collaboration and vision, blending ancient wisdom with contemporary creativity. Their success serves as an inspiration for future generations. Start preparing early for the project expo by finalizing your idea, researching, gathering materials, and practicing your presentation. Showcase project achievements, innovations, discoveries, and solutions that differentiate it from others. Rehearse presentation multiple times for smooth delivery and confidence. Conduct mock presentations for feedback and improvements.",
   image: "assets/EVENTS/project1.jpg"
 },
 event12: {
  title: "Kits yuva",
  description: "The students from AI department at KITS Yuva showcased their talents with flair and enthusiasm. They participated in a range of events, from coding competitions to robotics challenges, displaying remarkable ingenuity and teamwork. Their dedication and adaptability were evident as they tackled hackathons and debates with confidence. Despite the competitive atmosphere, the students maintained a spirit of sportsmanship and camaraderie, celebrating each other's achievements. KITS Yuva became a platform for them to not only showcase their technical skills but also to foster meaningful connections and friendships.",
  image: "assets/EVENTS/yuva.jpg"
 },
 event13: {
  title: "Generative AI",
  description: "The Society of Computing (SoC) recently hosted a captivating event spearheaded by its AI department featuring Mr. Bapuji as the esteemed guest speaker. The focus of the event was on Generative AI, a cutting-edge field poised to revolutionize various sectors. Mr. Bapuji delved into the intricate workings of Generative AI, showcasing its ability to create realistic content ranging from images to text and even music. Attendees were enthralled as he discussed its potential applications, from enhancing creativity in art and design to aiding in data augmentation for machine learning tasks. The event underscored the profound impact Generative AI is poised to have on shaping the future of technology and creativity.",
  desc: "Google Colab offers a free, cloud-based platform for running Python code, providing accessibility and convenience for users with different computing resources, ideal for experimenting with LLMS due to its computational power. Colab integrates with Python libraries like TensorFlow, PyTorch, and Hugging Face's Transformers for developing language models. Colab provides free GPU and TPU acceleration for faster model training, essential for computationally intensive tasks like large-scale LLMS. Within the dynamic core of the Society of Computing (SoC), innovation thrives as ideas intermingle in an atmosphere filled with energy. Here, collaboration sparks creativity, crafting a tapestry of technological wonders that push limits and reimagine what's possible. From the graceful coding in Google Colab to the inventive symphony of Language Model Systems, each keystroke resonates with the potential of a brighter digital landscape. In the SoC, we don't just envision the future; we bring it to life through coding, line by line, on a quest to shape a world where innovation has no boundaries.",
  image: "assets/EVENTS/ai.jpg"
 },
 event14: {
  title: "Innovation fair",
  description: "In a display of ingenuity and teamwork, Mr. Raju Mithra and his Mr. M Pavan ventured into the realm of innovation, showcasing their visionary project at the esteemed Innovation Fair hosted by JNTUK. Their relentless pursuit of excellence bore fruit as they clinched the coveted 4th prize, amidst fierce competition and brilliant minds. Raju Mithra and team impressed with creative ideas and meticulous execution. Their project embodies innovation and excellence, serving as inspiration for aspiring innovators.",
  image: "assets/EVENTS/fair.jpg"
 },
 event15: {
  title: "KITS College Bids Farewell to CAI 4th Year Students in a Heartfelt Ceremony",
  description: "KITS College reverberated with nostalgia and bittersweet emotions as it bid adieu to its CAI 4th Year students in a memorable farewell ceremony. Amidst heartfelt speeches, joyous performances, and reminiscing cherished moments, students and faculty alike celebrated the achievements and growth of the departing cohort. The event served as a poignant reminder of the transformative journey undertaken during their time at KITS, leaving indelible imprints of camaraderie and learning.",
  desc: "KITS College recently held a touching farewell ceremony for its CAI 4th Year students, encapsulating years of shared experiences and growth. The event was marked by heartfelt speeches, performances, and reflections, as students and faculty celebrated achievements and bid adieu to a cherished cohort, leaving behind memories to cherish for a lifetime.",
  image: "assets/EVENTS/farewell.jpg"
 },
 event16: {
  title: "Fappy Drone",
  description: "Event has concluded, leaving participants inspired and excited about the future of drone technology. Held on 28th june, this event brought together tech enthusiasts, students, industry professionals, and innovators to explore cutting-edge developments in drones and their transformative potential across various industries. The event kicked off with an insightful keynote address from  Speaker's , who shared their vision of how drones, combined with AI and machine learning, are revolutionizing industries such as healthcare, logistics, and agriculture. Their emphasis on sustainability and the role of drones in solving global challenges captivated the audience.Attendees were thrilled by a showcase of some of the most innovative drone projects to date.",
  desc: "Highlights included an  AI-driven autonomous drone, a modular drone platform designed for customized tasks, and a  green drone project that focused on using sustainable materials and minimizing environmental impact. The crowd was treated to  live demonstrations of drones in action, from  autonomous drones for package delivery to drones used in  agricultural monitoring . These demos highlighted the versatility and potential of drones to perform crucial tasks in various industries.",
  image: "assets/EVENTS/drone.jpg"
 },
 event17: {
  title: "NTTPS",
  description: "On 6th july 2024, students from Artificial Intelligence Department embarked on an educational visit to Narla Tatarao Thermal Power Station (NTTPS). This trip provided valuable insights into power generation processes and exposed students to real-world applications of their classroom knowledge. The students were guided through the various operations at NTTPS, witnessing firsthand how thermal power is generated, transmitted, and managed.",
  desc: "They had the opportunity to interact with engineers and professionals, who explained the intricate working of the plant, its environmental impact, and the advanced technologies used to optimize energy production. The group was especially inspired by the environmental management strategies employed at the power station, including emission controls and water conservation efforts, which highlighted the importance of sustainable practices in energy generation.",
  image: "assets/EVENTS/nttps.jpg"
 },
 event18: {
  title: "Skill Oriented course: Cyber security",
  description: "The Department of Artificial intelligence successfully hosted a 2-day seminar on Lean Startup & Minimum Viable Product,from July 5 to July 16, 2023, at the AICTE IDEA Lab. The event featured Mr. Bharath Kumar Reddy, a distinguished mentor from IIT Madras, who led insightful sessions on startup strategies and the development of minimum viable products (MVP). Participants engaged in interactive mentoring sessions, gaining valuable knowledge on how to refine their entrepreneurial ideas and develop successful products through lean startup methodologies.",
  desc: "Attendees praised the seminar for its practical approach, offering real-world examples and personalized feedback to help budding entrepreneurs bring their ideas to market. The seminar highlighted the importance of MVPs in minimizing risk and maximizing innovation potential. The event provided a platform for knowledge exchange, networking, and collaboration, ensuring that participants left with actionable strategies for their entrepreneurial journeys.",
  image: "assets/EVENTS/cyber.jpg"
 },
 event19: {
  title: "Skill Oriented course: DEVOPS",
  description: "The Department of CSE-AI&ML at KKR & KSR Institute of Technology and Sciences successfully hosted a one-week skill-oriented training and workshop titled Unlock DevOps Potential with AWS through Problem Solving & Ideation from 2nd to 8th September 2024. The workshop, led by Mr. Mustafa Shaik, a DevOps Engineer and Lead Trainer from L&T Team Sycronotta, focused on enhancing students' understanding of DevOps practices and AWS tools. Attendees gained hands-on experience in problem-solving and ideation, key skills for the rapidly evolving tech industry.",
  desc: "The event, held at the AICTE IDEA LAB, received positive feedback from participants for its practical approach and interactive sessions. Organized by the Department of CSE-AI&ML, the workshop empowered students with essential knowledge in cloud computing and development operations, preparing them for future career challenges in the tech sector",
  image: "assets/EVENTS/devops.jpg"
 },
 event20: {
  title: "Skill Oriented course: Full Stack with Python",
  description: "The Department of Artificial Intelligence (CAI) at KKR & KSR Institute of Technology and Sciences recently organized a successful workshop on full stack development with Python. The workshop was conducted by Mr. K. Siva krishna Rao, Director of CODERKYTES, and was held at the AICTE IDEA LAB for a week. The workshop was interactive and hands-on, with participants working on real-world projects. Mr. K. Siva krishna Rao, the workshop instructor, is an experienced Python developer and trainer with a passion for teaching.The workshop received positive feedback from participants, who appreciated the following aspects: The comprehensive coverage of topics. The hands-on nature of the workshop. The expertise of the instructor. The opportunity to network with other Python developers",
  image: "assets/EVENTS/pyt.jpg"
 },
 event21: {
  title: "Recurit",
  description: "The Elite Club of KKR & KSR Institute of Technology and Sciences held a successful recruitment drive for juniors, led by senior members, to welcome new talent into the club. The event provided an opportunity for secon-year students to learn about the club's activities, which focus on skill development, teamwork, and extracurricular growth. Senior students shared their experiences and highlighted the benefits of being a part of the Elite Club. The interactive session saw an enthusiastic response from juniors, who actively participated in discussions and expressed interest in joining. The event concluded with a Q&A session, where seniors addressed queries and encouraged juniors to enhance their college experience by contributing to and benefiting from the Elite Club's initiatives. ",
  image: "assets/EVENTS/recurit.jpg"
 },
 event22: {
  title: "Teatures day celebrations",
  description: "The  Elite Club  of KKR & KSR Institute of Technology and Sciences organized a memorable Teachers' Day celebration, honoring the dedication and hard work of the faculty. The event commenced with a formal inauguration by esteemed faculty members, who lit the ceremonial lamp and addressed the gathering. The students of the Elite Club expressed their gratitude towards the teachers through heartfelt speeches and cultural performances, highlighting the invaluable role that teachers play in shaping their future. As a token of appreciation, the club organized a special gift distribution ceremony, where faculty members were presented with personalized gifts as a gesture of respect and admiration.",
  desc: "The event was well-received by the teaching staff, who expressed their delight and gratitude. The celebration concluded on a high note, reinforcing the strong bond between students and faculty, and leaving everyone with a sense of pride and appreciation for the teaching profession.",
  image: "assets/EVENTS/tea.jpg"
 },
 event23: {
  title: "MOU Signing",
  description: "KKR & KSR Institute of Technology and Sciences has entered into a significant  Memorandum of Understanding (MoU) with Syncronota TechnoloGIES Pvt. Ltd. The formal signing ceremony, held at the institution’s  Mechanical Seminar Hall on 6th september 2024, marked the beginning of a strategic partnership aimed at fostering collaboration in advanced technologies and industry-oriented training. Representatives from both organizations highlighted the mutual benefits this MoU will bring, particularly in bridging the gap between academia and industry needs.",
  desc: "Through this MoU, students of KITS will have access to industry-specific workshops, internships, and project opportunities with Syncronota Technologies. This collaboration aims to enhance students technical skills and employability by providing real-world exposure to cutting-edge technologies. Both parties expressed their enthusiasm for the long-term partnership, which will contribute to innovation and growth in both the academic and industrial sectors.",
  image: "assets/EVENTS/mou.jpg"
 },
 event24: {
  title: "Internal Hackathon for SIH 2024",
  description: "The much-anticipated Smart India Hackathon (SIH) 2024 was successfully conducted at KKR &KSR INSTITUTE OF TECHNOLOGY AND SCIENCES, bringing together some of the brightest minds to tackle real-world problems through innovation and technology. The event, held over a period of 36 hours, saw enthusiastic participation from students across various disciplines, all working tirelessly to create cutting-edge solutions for complex challenges. From software prototypes to hardware innovations, this year’s SIH showcased the potential of young innovators to contribute to India’s growth in the tech-driven era. Participants were presented with a diverse set of problem statements sourced from industry partners, government agencies, and non-governmental organizations. Each team was tasked with developing functional prototypes aimed at addressing these real-world challenges.",
  desc: " From healthcare and smart cities to education and agriculture, the teams worked on projects that could potentially transform sectors critical to India’s development. The variety of projects demonstrated the versatility and problem-solving capabilities of the student community, pushing the boundaries of what technology can achieve.",
  image: "assets/EVENTS/sih.jpg"
 },
 event25: {
  title: "Freshers Party",
  description: "The Freshers' Day celebrations at KITS turned out to be an unforgettable event, as the college community came together to welcome the new batch with warmth and enthusiasm. The event was marked by a series of lively performances and heartfelt interactions, making it a joyous occasion for everyone.The highlight of the day was the spectacular dance performances by students, featuring a blend of styles such as folk, western, and traditional dances. Each performance was a testament to the diverse talents and cultural vibrancy within the college.In addition to the cultural showcase, awards were presented to the champions of various sports events, including kabaddi, volleyball, cricket, kho-kho, and throwball.",
  desc: "The winners received loud applause and recognition for their remarkable achievements and sportsmanship. To conclude the event on a special note, the seniors presented thoughtful gifts to the juniors, symbolizing the beginning of a supportive and friendly bond. The gesture was met with smiles and gratitude from the freshers, making the day even more memorable.The Freshers' Day celebrations perfectly encapsulated the spirit of camaraderie, talent, and joy, leaving everyone eagerly looking forward to a bright and exciting academic year ahead.",
  image: "assets/EVENTS/freshers.jpg"
 },
 event26: {
  title: "Ganesh Chaturthi",
  description: "The Department of Artificial Intelligence at KKR & KSR Institute of Technology and Sciences organized a vibrant Ganesh Pooja on the auspicious occasion of Ganesh Chaturthi. The celebration took place in a beautifully decorated venue adorned with marigold garlands, traditional motifs, and an eco-friendly idol of Lord Ganesha. The event began with a serene pooja ceremony led by a priest, invoking blessings for wisdom, prosperity, and success. Students, faculty, and staff actively participated in the rituals, fostering a sense of unity and spiritual harmony.",
  desc: "This celebration was a unique blend of tradition and innovation,reflecting the department's ethos of integrating cultural values with cutting-edge advancements in Artificial Intelligence. The pooja served as a reminder of the importance of seeking divine blessings as we embrace challenges and opportunities in our academic and professional journeys. The Department of Artificial Intelligence extends heartfelt gratitude to all who contributed to the event’s success. May Lord Ganesha guide us all on the path of knowledge and enlightenment.",
  image: "assets/EVENTS/ganesh.jpg"
 },
 event27: {
  title: "Innovation Day",
  description: "On 15th October 2024, KITS College, Vinjanampadu, proudly celebrated National Innovation Day in honor of the birth anniversary of Dr. APJ Abdul Kalam, a pioneer of innovation and inspiration. The event was organized by the Elite Club under the aegis of the Institution Innovation Council (IIC) and AICTE Idea Lab, fostering a culture of creativity and ingenuity among students. The day commenced with a tribute to Dr. Kalam's legacy, emphasizing his invaluable contributions to science and technology. Esteemed faculty and students gathered to discuss the importance of innovation in shaping a sustainable and progressive future. The event reflected the college's commitment to nurturing a spirit of invention and curiosity among young minds.",
  desc: "The success of the National Innovation Day celebrations stands as a testament to KITS College's dedication to fostering a culture of learning, creativity, and growth. Let us continue to innovate and work toward a brighter tomorrow! Highlighting the celebrations, a Quiz Competition was conducted to engage students in showcasing their knowledge and spark innovative thinking. The winners were awarded certificates and accolades, applauding their excellence and enthusiasm. Addressing the audience, faculty members inspired students to embrace innovative practices in their academic and professional pursuits.",
  image: "assets/EVENTS/inno.jpg"
 },
 event28: {
  title: "Motivational speech",
  description: "On 01 October, 2024, the Department of Computer Science and Engineering (AI) at kkr & ksr institute of technology and sciences organized an inspiring event titled “From Dreams to Reality: Strategic Goal Setting for Undergraduates”. The event aimed to instill motivation, confidence, and clarity of goals among students, encouraging them to dream big and work strategically to achieve their aspirations. The program featured a keynote address by an esteemed speaker, whose words left an indelible mark on the attendees. The session focused on setting realistic yet ambitious goals and highlighted the importance of perseverance, skill-building, and time management. Students were motivated to leverage their talents and explore emerging opportunities in their respective fields.",
  desc: " The event was graced by faculty members, student coordinators, and a dynamic audience of undergraduates. A special moment of the day was the presentation of a memento of appreciation to the guest speaker, which symbolized the college’s gratitude for the invaluable insights shared.The atmosphere was filled with energy and determination as students actively participated, interacted with the speaker, and reflected on the lessons shared. The event concluded with a vote of thanks, leaving students inspired to transform their dreams into reality.",
  image: "assets/EVENTS/mot.jpg"
 },
 event29: {
  title: "Impact of AI on Financial Regulations and Compliance",
  description: "The Department of CAI (Computer Applications and Information) at KKR & KSR Institute of Technology and Sciences organized an insightful guest lecture titled Impact of AI on Financial Regulations and Compliance (Personal Finance & Security Markets) on 28th September 2024.The session was delivered by Dr. S. Srinivasa Rao, SEBI Trainer and MBA Associate Professor from TJPS College, Guntur. During the lecture, Dr. Rao shared his expertise on how Artificial Intelligence is transforming financial regulations and compliance in areas like personal finance and security markets.",
  desc: "The event, held at the AICTE IDEA Lab, was part of the Institution Innovation Council (IIC) initiatives aimed at fostering knowledge and innovation among students and faculty. The lecture provided attendees with valuable insights into the integration of AI in regulatory frameworks, ensuring compliance, and its implications for financial markets.The management, faculty, and students expressed their gratitude to Dr. S. Srinivasa Rao for his engaging session, which enhanced their understanding of emerging trends in AI and finance. Events like this underline the institution's commitment to equipping students with the knowledge required to excel in the ever-evolving technological landscape.",
  image: "assets/EVENTS/finance.jpg"
 },
 event30: {
  title: "Swachhata Hi Seva (NSS)",
  description: "As part of the nationwide Swachhata Hi Seva initiative, KITS College, Vinjanampadu, Andhra Pradesh, organized a remarkable cleanliness drive on 21st September 2024. The event was spearheaded by the National Service Scheme (NSS) unit of the college, with enthusiastic participation from both students and faculty.The initiative emphasized the importance of community involvement in maintaining cleanliness and preserving the environment. Students were seen actively cleaning the premises, gathering dry vegetation, and promoting sustainable waste management practices. The collective effort reflected the college's commitment to fostering civic responsibility among its students.",
  desc: "The event was also an opportunity to spread awareness about the importance of a clean environment for a healthier and better future. Addressing the gathering, faculty members highlighted how such initiatives contribute to the larger vision of Swachh Bharat.The enthusiasm and dedication displayed by the participants underscore the importance of youth involvement in nation-building activities. KITS College continues to uphold its role in shaping responsible citizens through such impactful initiatives. Let us all pledge to keep our surroundings clean and work towards a sustainable tomorrow!",
  image: "assets/EVENTS/nss.jpg"
 },
 event31: {
  title: "Student Publications",
  description: "In a harmonious blend of innovation, Mr. Raju Mithra and 70 peers from the AI department have revealed their projects, each showcasing their combined brilliance and steadfast commitment. Ranging from impressive algorithms to groundbreaking neural networks, their creations form a diverse array of ideas that challenge the limits of artificial intelligence. After investing a significant amount of time in design and fine-tuning, they have developed groundbreaking solutions that defy conventions and influence the future. Their efforts inspire AI enthusiasts and make a profound mark on the worldwide tech scene, highlighting the potential of human intelligence for a better tomorrow. Mr. Raju Mithra, the co-founder and CEO of SlovX Technologies, has recently contributed pioneering research papers in the field of artificial intelligence and sustainable technology. His work explores innovative approaches to enhance efficiency and reduce environmental impact, showcasing his dedication to advancing cutting-edge solutions for societal and industrial challenges.",
  image: "assets/EVENTS/stu.jpg"
 },
 event32: {
  title: "NCC",
  description: "A group of dedicated NCC students at RVR & JC College,  Devalla Ayyappa, M. Revanth, Krupa Jyothi, G. Mohana Sambha Siva Rao, and Immadi Naga Ravindhra Babu, achieved the NCC B-certificate through discipline, leadership, and service training. Their experience instilled patriotism, selflessness, and resilience, fostering personal growth and a commitment to serving the nation and community. The certificate symbolizes their hard work and dedication to upholding NCC values, preparing them to make meaningful contributions to society.",
  image: "assets/EVENTS/ncc.jpg"
 },
 event33: {
  title: "NSS",
  description: "The NSS (National Service Scheme) Club organized a transformative one-week camp that showcased the club’s commitment to social service and personal development. Held at vinjanamapadu, the camp provided an excellent platform for volunteers to actively engage in community-oriented activities, learn valuable life skills, and foster team spirit.The camp concluded with a valedictory ceremony where participants shared their experiences and reflected on the meaningful impact they created. The NSS Club’s initiative successfully inspired both students and the local community to collaborate for a better tomorrow.",
  image: "assets/EVENTS/nss1.jpg"
 },
 event33: {
  title: "NSS",
  description: "The NSS (National Service Scheme) Club organized a transformative one-week camp that showcased the club’s commitment to social service and personal development. Held at vinjanamapadu, the camp provided an excellent platform for volunteers to actively engage in community-oriented activities, learn valuable life skills, and foster team spirit.The camp concluded with a valedictory ceremony where participants shared their experiences and reflected on the meaningful impact they created. The NSS Club’s initiative successfully inspired both students and the local community to collaborate for a better tomorrow.",
  image: "assets/EVENTS/nss1.jpg"
 },
 event34: {
  title: "Women's day celebratons",
  description: "Women's Day in college is typically celebrated to honor and appreciate the achievements and contributions of women in various fields. Colleges often organize events such as panel discussions, seminars, workshops, cultural programs, and awareness campaigns highlighting gender equality and women's empowerment. It's a time to reflect on the progress made towards gender equality and to address ongoing challenges. Additionally, it provides an opportunity to celebrate the achievements of female students, faculty, and staff within the college community",
  image: "assets/EVENTS/woman.jpg"
 },
 event35: {
  title: "Elite 1st anniversary",
  description: "AI branch student association “ELITE”  club serve as valuable platform for students to engage in extracurricular activities directly related to their academic discipline. This club provide a space for students to collaborate, share knowledge, and foster a sense of community within their field of study. Through organizing events, workshops, seminars, and networking opportunities, students can deepen their understanding of their subject area, develop practical skills, and establish connections with peers and professionals alike. Additionally, involvement in such clubs offers students the chance to enhance their leadership abilities, build teamwork skills, and contribute to the overall enrichment of their academic experience.",
  image: "assets/EVENTS/elite.jpg"
 }
};

// Function to open popup with event details
function openPopup(eventId) {
  const popup = document.getElementById('popup');
  const popupContent = document.querySelector('.popup-content');
  const title = document.getElementById('popup-title');
  const description = document.getElementById('popup-description');
  const desc = document.getElementById('popup-desc');
  const image = document.getElementById('popup-image');

  // Update content
  title.textContent = eventsData[eventId].title;
  description.textContent = eventsData[eventId].description;
  desc.textContent = eventsData[eventId].desc;
  image.src = eventsData[eventId].image;
  image.alt = eventsData[eventId].title;

  // Show popup
  popup.style.display = 'block';
  
  // Enable scrolling within popup content
  popupContent.style.maxHeight = '90vh';
  popupContent.style.overflowY = 'auto';
  
  // Disable background scrolling
  document.body.style.overflow = 'hidden';
}

// Function to close popup
function closePopup() {
  const popup = document.getElementById('popup');
  
  // Hide popup
  popup.style.display = 'none';
  
  // Re-enable background scrolling
  document.body.style.overflow = 'auto';
}

// Handle clicks on popup overlay
function handlePopupClick(event) {
  if (event.target.className === 'popup' || event.target.className === 'close') {
      closePopup();
  }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Close with escape key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          closePopup();
      }
  });

  // Prevent popup content clicks from closing
  const popupContent = document.querySelector('.popup-content');
  if (popupContent) {
      popupContent.addEventListener('click', (e) => {
          e.stopPropagation();
      });
  }

  // Add click handler for close button
  const closeBtn = document.querySelector('.close');
  if (closeBtn) {
      closeBtn.addEventListener('click', closePopup);
  }
});