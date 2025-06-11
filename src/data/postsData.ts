export const postsData = [
  {
    id: 1,
    title: "The Rise of AI in Modern Software Development",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    readTime: "5 min read",
    date: "Feb 15, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Coding", "AI", "Technology"],
    content: `Artificial Intelligence is revolutionizing how we approach software development. From code completion to automated testing, AI tools are becoming an integral part of a developer's toolkit. This shift is not just about automation; it's about augmenting human capabilities to create better, more efficient software solutions.

    Key areas where AI is making an impact:
    1. Intelligent Code Completion
    2. Automated Code Review
    3. Bug Detection and Prevention
    4. Test Case Generation
    
    As we continue to advance in this field, the synergy between human creativity and AI capabilities will define the future of software development.`
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes, Big Impact",
    image: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg",
    readTime: "4 min read",
    date: "Feb 20, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Eco", "Lifestyle", "Sustainability"],
    content: `Living sustainably doesn't require a complete lifestyle overhaul. Small, consistent changes can lead to significant environmental benefits. Here are some simple ways to make your daily routine more eco-friendly:

    1. Reduce Single-Use Plastics
    - Carry reusable bags
    - Use a water bottle
    - Choose products with minimal packaging

    2. Energy Conservation
    - Switch to LED bulbs
    - Unplug unused devices
    - Use natural light when possible

    3. Mindful Consumption
    - Buy local when possible
    - Choose quality over quantity
    - Repair before replacing

    Remember, every small action counts towards a more sustainable future.`
  },
  {
    id: 3,
    title: "Modern Web Development with React and TypeScript",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    readTime: "6 min read",
    date: "Feb 22, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Coding", "React", "TypeScript"],
    content: `TypeScript has become the go-to choice for building robust React applications. Its static typing system helps catch errors early and improves code maintainability. Here's why this combination is powerful:

    1. Type Safety
    - Catch errors during development
    - Better IDE support
    - Improved code documentation

    2. React with TypeScript
    - Strongly typed props
    - Generic components
    - Enhanced component patterns

    3. Best Practices
    - Use interfaces for props
    - Leverage union types
    - Implement proper error boundaries

    Code example:
    \`\`\`typescript
    interface Props {
      title: string;
      count: number;
      onUpdate: (count: number) => void;
    }

    const Counter: React.FC<Props> = ({ title, count, onUpdate }) => {
      return (
        <div>
          <h2>{title}</h2>
          <button onClick={() => onUpdate(count + 1)}>
            Count: {count}
          </button>
        </div>
      );
    };
    \`\`\`
    `
  },
  {
    id: 4,
    title: "Urban Gardening: Growing Food in Small Spaces",
    image: "https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg",
    readTime: "4 min read",
    date: "Feb 24, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Eco", "Gardening", "Sustainability"],
    content: `Urban gardening is a fantastic way to grow your own food while contributing to a more sustainable lifestyle. Even with limited space, you can create a productive garden:

    1. Container Gardening
    - Choose appropriate containers
    - Select suitable plants
    - Proper drainage systems

    2. Vertical Gardens
    - Wall-mounted systems
    - Hanging planters
    - Stackable containers

    3. Essential Plants for Beginners
    - Herbs: basil, mint, parsley
    - Vegetables: tomatoes, lettuce
    - Microgreens

    Tips for Success:
    - Use quality soil
    - Ensure adequate sunlight
    - Regular watering schedule
    - Companion planting
    
    Urban gardening not only provides fresh produce but also helps reduce carbon footprint and promotes biodiversity in cities.`
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    readTime: "7 min read",
    date: "Feb 25, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Coding", "Node.js", "Backend"],
    content: `Creating scalable APIs requires careful planning and implementation. Here's a comprehensive guide to building robust Node.js APIs:

    1. Architecture Principles
    - Modular design
    - Separation of concerns
    - Error handling strategies

    2. Performance Optimization
    - Caching mechanisms
    - Database indexing
    - Load balancing

    3. Security Best Practices
    - Input validation
    - Authentication/Authorization
    - Rate limiting

    Example middleware:
    \`\`\`javascript
    const rateLimit = (req, res, next) => {
      const requestCount = getRequestCount(req.ip);
      
      if (requestCount > MAX_REQUESTS) {
        return res.status(429).json({
          error: 'Too many requests'
        });
      }
      
      next();
    };
    \`\`\`

    Remember to implement proper monitoring and logging for production environments.`
  },
  {
    id: 6,
    title: "Zero-Waste Living: A Beginner's Guide",
    image: "https://images.pexels.com/photos/5749318/pexels-photo-5749318.jpeg",
    readTime: "5 min read",
    date: "Feb 26, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Eco", "Zero-Waste", "Lifestyle"],
    content: `Transitioning to a zero-waste lifestyle is a journey that begins with small, manageable steps. Here's how to get started:

    1. Assess Your Waste
    - Track your trash for a week
    - Identify main sources of waste
    - Find reusable alternatives

    2. Essential Swaps
    - Cloth bags for shopping
    - Reusable water bottles
    - Cloth napkins
    - Glass containers

    3. Shopping Tips
    - Buy in bulk
    - Choose package-free options
    - Support local markets
    - Bring your own containers

    4. Food Waste Reduction
    - Meal planning
    - Proper food storage
    - Composting
    
    Remember, the goal isn't perfection but progress toward reducing our environmental impact.`
  },
  {
    id: 7,
    title: "JavaScript Performance Optimization: Tips for Faster Web Apps",
    image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg",
    readTime: "6 min read",
    date: "Feb 28, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Coding", "JavaScript", "Performance"],
    content: `JavaScript performance optimization is crucial for creating smooth, responsive web applications. Poor performance can lead to frustrated users and higher bounce rates. Here are proven techniques to make your JavaScript applications lightning fast:

    1. Optimize DOM Manipulation
    - Minimize direct DOM access
    - Use document fragments for multiple insertions
    - Cache DOM references
    - Batch DOM updates together

    2. Efficient Event Handling
    - Use event delegation for dynamic content
    - Debounce expensive operations
    - Remove unused event listeners
    - Prefer passive event listeners when possible

    3. Memory Management
    - Avoid memory leaks with proper cleanup
    - Use WeakMap and WeakSet for object references
    - Clear intervals and timeouts
    - Remove DOM references when no longer needed

    4. Code Splitting and Lazy Loading
    - Split large bundles into smaller chunks
    - Load modules on demand
    - Use dynamic imports for route-based splitting
    - Implement lazy loading for images and components

    Example of efficient DOM manipulation:
    \`\`\`javascript
    // Instead of multiple DOM updates
    for (let i = 0; i < items.length; i++) {
      container.appendChild(createItem(items[i]));
    }

    // Use document fragment
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      fragment.appendChild(createItem(item));
    });
    container.appendChild(fragment);
    \`\`\`

    5. Optimize Loops and Algorithms
    - Use appropriate data structures
    - Cache array lengths in loops
    - Prefer for loops over forEach for performance-critical code
    - Use binary search for sorted arrays

    6. Asynchronous Programming Best Practices
    - Use Promise.all for parallel operations
    - Implement proper error handling
    - Avoid blocking the main thread
    - Use Web Workers for heavy computations

    Remember, always measure performance before and after optimizations. Use browser dev tools to profile your code and identify bottlenecks. The key is to optimize what matters most for your specific use case.`
  },
  {
    id: 8,
    title: "The Art of Storytelling: Crafting Compelling Narratives",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    readTime: "6 min read",
    date: "Mar 1, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Stories", "Writing", "Narrative"],
    content: `Storytelling is an ancient art that continues to captivate audiences across all mediums. Whether you're writing fiction, creating content, or simply sharing experiences, mastering the fundamentals of storytelling can transform ordinary narratives into extraordinary ones.

    1. The Power of Structure
    - Begin with a compelling hook that draws readers in
    - Develop a clear three-act structure: setup, confrontation, resolution
    - Create tension through conflict and obstacles
    - Build to a satisfying climax and resolution

    2. Character Development
    - Create relatable protagonists with clear motivations
    - Give characters distinct voices and personalities
    - Show character growth through actions, not just words
    - Develop meaningful relationships between characters

    3. Setting and Atmosphere
    - Use vivid descriptions to paint scenes in readers' minds
    - Make locations feel authentic and lived-in
    - Use setting to reflect character emotions and story themes
    - Research thoroughly to add credibility to your world

    4. Dialogue That Sings
    - Make conversations sound natural and purposeful
    - Use dialogue to reveal character and advance plot
    - Vary speech patterns to distinguish between characters
    - Show subtext through what characters don't say

    Essential techniques for compelling narratives:
    - Start in the middle of action (in medias res)
    - Use sensory details to immerse readers
    - Create emotional stakes that matter to your audience
    - Plant seeds early that pay off later
    - Edit ruthlessly to maintain pacing and focus

    Remember, great stories connect with readers on an emotional level. They explore universal themes through specific, personal experiences that resonate long after the final page.`
  },
  {
    id: 9,
    title: "Short Story Mastery: Capturing Life in Miniature",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    readTime: "5 min read",
    date: "Mar 3, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Stories", "Short Fiction", "Literary"],
    content: `Short stories are literary gems that capture profound moments in compact form. Unlike novels, they require precision, focus, and the ability to create maximum impact with minimal words. Every sentence must serve a purpose.

    1. The Art of Economy
    - Start as close to the climax as possible
    - Eliminate unnecessary backstory and exposition
    - Choose words carefully for maximum impact
    - Let readers fill in gaps with their imagination
    - Focus on a single moment or revelation

    2. Character in Miniature
    - Reveal character through action and dialogue
    - Give protagonists clear, immediate goals
    - Use physical details that hint at deeper truths
    - Create characters readers can understand quickly
    - Show change or revelation in brief moments

    3. Crafting the Perfect Opening
    - Hook readers with compelling first lines
    - Establish voice, tone, and setting immediately
    - Introduce conflict or tension early
    - Avoid lengthy descriptions or background
    - Make every word count from the first sentence

    4. Endings That Resonate
    - Aim for surprise that feels inevitable
    - Leave readers with something to ponder
    - Avoid neat, tidy conclusions
    - Echo themes established earlier
    - Create emotional impact in final moments

    Technical Considerations:
    - Maintain consistent point of view
    - Use present tense for immediacy when appropriate
    - Create unity through recurring images or phrases
    - Edit multiple times to achieve compression
    - Read aloud to check rhythm and flow

    Short stories teach writers discipline and precision. They're laboratories for experimenting with voice, structure, and technique. Master the short form, and longer works become more manageable and impactful.`
  },
  {
    id: 10,
    title: "Fantasy Worldbuilding: Creating Believable Magic Systems",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    readTime: "8 min read",
    date: "Mar 5, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Stories", "Fantasy", "Worldbuilding"],
    content: `Fantasy worldbuilding goes beyond creating maps and naming kingdoms. A well-constructed magic system can make or break a fantasy story, providing internal logic that helps readers suspend disbelief and invest in your fictional world.

    1. Establishing Rules and Limitations
    - Define what magic can and cannot do
    - Create consistent costs or consequences
    - Establish who can use magic and why
    - Set clear boundaries to maintain tension
    - Make limitations as interesting as abilities

    2. Sources of Magical Power
    - Internal energy or life force
    - External sources like crystals or ley lines
    - Divine or otherworldly entities
    - Natural elements or cosmic forces
    - Emotional states or mental discipline

    3. Magic System Types
    - Hard magic: detailed rules and scientific approach
    - Soft magic: mysterious and atmospheric
    - Hybrid systems combining both approaches
    - Cultural magic tied to specific societies
    - Evolutionary magic that changes over time

    4. Consequences and Balance
    - Physical exhaustion or mental strain
    - Moral or ethical implications
    - Social stigma or political ramifications
    - Unintended side effects or magical backlash
    - Long-term effects on users and environment

    5. Integration with Plot and Character
    - Use magic to reveal character traits
    - Create conflicts through magical limitations
    - Build plot tension around magical costs
    - Show character growth through magical mastery
    - Make magic essential to story resolution

    Cultural Considerations:
    - How does society view magic users?
    - What institutions control or regulate magic?
    - How has magic shaped history and politics?
    - What myths and legends surround magical events?
    - How do different cultures approach magic differently?

    Worldbuilding is about creating internal consistency that allows readers to believe in the impossible. A well-designed magic system enhances story themes and provides a foundation for meaningful conflict and character development.`
  },
  {
    id: 11,
    title: "Character Development: Breathing Life into Fiction",
    image: "https://images.pexels.com/photos/792011/pexels-photo-792011.jpeg",
    readTime: "7 min read",
    date: "Mar 7, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Stories", "Characters", "Writing Craft"],
    content: `Creating memorable characters is perhaps the most crucial skill in storytelling. Readers connect with stories through characters, and well-developed personalities can make even simple plots compelling while flat characters can sink the most elaborate narratives.

    1. Building Character Foundations
    - Start with core motivations and fears
    - Develop backstories that inform present actions
    - Create internal and external conflicts
    - Establish clear goals and obstacles
    - Define moral codes and breaking points

    2. The Psychology of Character
    - Give characters contradictory traits for complexity
    - Show how past experiences shape current behavior
    - Create believable character flaws and strengths
    - Develop unique voices and speech patterns
    - Understand character archetypes but avoid stereotypes

    3. Character Arc Development
    - Begin with character in comfortable status quo
    - Introduce inciting incident that disrupts balance
    - Show character struggling with new challenges
    - Create moments of crisis and self-discovery
    - End with character fundamentally changed

    4. Revealing Character Through Action
    - Show personality through choices under pressure
    - Use dialogue to reveal thoughts and emotions
    - Demonstrate values through character decisions
    - Create scenes that test character convictions
    - Let readers discover traits organically

    5. Supporting Character Ensemble
    - Give each character a unique role and purpose
    - Create relationships that reveal protagonist traits
    - Develop antagonists with understandable motivations
    - Use minor characters to reflect themes
    - Ensure each character has distinct voice and goals

    Character Development Exercises:
    - Write character interviews or journal entries
    - Place characters in unusual situations
    - Explore character relationships and histories
    - Create detailed character profiles and timelines
    - Practice writing scenes from different character perspectives

    Remember that characters don't need to be likeable, but they must be understandable. Readers should be able to follow character logic, even when disagreeing with choices. Great characters feel like real people with rich inner lives.`
  },
  {
    id: 12,
    title: "Mystery Writing: Plotting the Perfect Puzzle",
    image: "https://images.pexels.com/photos/1024991/pexels-photo-1024991.jpeg",
    readTime: "6 min read",
    date: "Mar 9, 2024",
    author: {
      name: "Ankit Kumar Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      path: "/author/ankit"
    },
    tags: ["Stories", "Mystery", "Plotting"],
    content: `Mystery writing is the art of controlled revelation. Success depends on balancing information disclosure with reader engagement, creating puzzles that are solvable yet surprising. The best mysteries play fair while keeping readers guessing until the final pages.

    1. Constructing the Central Mystery
    - Start with the solution and work backwards
    - Create multiple viable suspects with motives
    - Plant clues that support different theories
    - Ensure the solution is logical and satisfying
    - Hide crucial information in plain sight

    2. The Detective Character
    - Give investigators unique methods and perspectives
    - Create personal stakes in solving the case
    - Develop distinctive deductive reasoning styles
    - Show both successes and failures in logic
    - Make the detective relatable and flawed

    3. Clue Placement and Pacing
    - Distribute clues evenly throughout the story
    - Mix obvious clues with subtle ones
    - Use red herrings to mislead without cheating
    - Reveal information at moments of maximum impact
    - Ensure every clue serves the larger puzzle

    4. Creating Compelling Suspects
    - Give each suspect credible motives and opportunities
    - Develop believable alibis that can be questioned
    - Create complex relationships between characters
    - Use secrets and lies to maintain suspicion
    - Make the guilty party someone readers could suspect

    5. Building Atmosphere and Tension
    - Use setting to enhance mood and mystery
    - Create time pressure or escalating stakes
    - Layer revelations to maintain momentum
    - Balance investigation scenes with character development
    - End chapters with questions or discoveries

    Essential Mystery Elements:
    - A crime or puzzle that needs solving
    - An investigator committed to finding truth
    - A closed circle of suspects with access and motive
    - Clues that can be interpreted multiple ways
    - A logical solution that surprises readers

    The key to great mystery writing is respecting your readers' intelligence while crafting a puzzle worthy of their attention. Every element should serve the central mystery while creating an engaging story experience.`
  }
];