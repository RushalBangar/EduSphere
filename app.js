// ==========================================================================
// EDUSPHERE AI - WEB FLASHCARDS WORKSPACE ENGINE (app.js)
// ==========================================================================

// Global Application Database & State Management
let appDatabase = {
  iot: {
    title: "Internet of Things",
    chapters: [
      {
        id: "iot-ch1",
        num: "Chapter 1",
        title: "Machine to Machine Communication",
        cards: [
          {
            id: "iot-c1-1",
            question: "What is Machine-to-Machine (M2M) communication?",
            answer: "Direct communication between devices using wired or wireless channels without human intervention.",
            explanation: "M2M communication refers to automated data exchange between devices. A sensor collects data and transmits it to a gateway or server, which triggers actions without human interaction. This forms the foundation of the Internet of Things.\n\n```json\n// Typical M2M Data Flow\n{\n  \"source_node\": \"WaterMeter_A1\",\n  \"destination_gateway\": \"CellTower_X4\",\n  \"payload_bytes\": 42,\n  \"action\": \"LOG_CONSUMPTION\"\n}\n```"
          },
          {
            id: "iot-c1-2",
            question: "What are the core components of an M2M ecosystem?",
            answer: "Sensors/actuators, cellular or local wireless networks, gateways, and backend integration servers.",
            explanation: "An M2M ecosystem consists of three key layers:\n1. **M2M Devices**: Local physical nodes containing microcontrollers and sensors.\n2. **Network Infrastructure**: The channel for transmission, such as Wi-Fi, Zigbee, LoRa, or cellular.\n3. **M2M Application Server**: A centralized backend platform that processes data and triggers automated workflows."
          },
          {
            id: "iot-c1-3",
            question: "How does M2M differ from the broader definition of IoT?",
            answer: "M2M focuses on point-to-point device interaction; IoT is a global network of integrated web systems.",
            explanation: "While they are closely related, they differ in scope:\n- **M2M**: Point-to-point, isolated, telemetric hardware interactions, usually closed systems (e.g. standard vending machines communicating stock to the distributor).\n- **IoT**: Highly integrated, cloud-native global systems where devices sync with mobile apps, dashboards, and AI engines."
          },
          {
            id: "iot-c1-4",
            question: "What cellular networks are optimized for M2M communication?",
            answer: "NB-IoT (Narrowband IoT) and LTE-M (Long Term Evolution for Machines).",
            explanation: "Standard cellular networks (like 4G/5G) are too power-hungry and expensive for simple remote devices. **NB-IoT** and **LTE-M** are low-power, wide-area network (LPWAN) cellular standards. They offer massive network penetration (ideal for deep indoor or underground placements), run on low power, and support millions of nodes per cell tower."
          },
          {
            id: "iot-c1-5",
            question: "Give a practical real-world application of M2M technology.",
            answer: "Smart grid utility meters reporting water/electricity usage directly to power company systems.",
            explanation: "Smart meters installed in homes measure energy or water consumption and autonomously transmit this data daily to the municipal utility company. This eliminates the need for manual readings, optimizes electricity distribution, and detects leaks automatically."
          }
        ]
      },
      {
        id: "iot-ch2",
        num: "Chapter 2",
        title: "Communication Protocols",
        cards: [
          {
            id: "iot-c2-1",
            question: "Why is MQTT preferred over standard HTTP for constrained IoT networks?",
            answer: "MQTT is lightweight, uses a publish-subscribe model, and has a minimal 2-byte header.",
            explanation: "HTTP requires a heavy TCP connection handshake and massive text headers for every request/response cycle, which quickly drains device batteries. MQTT utilizes a binary message format with a minimal 2-byte header. Its publish/subscribe model allows devices to sleep; they don't have to keep polling a server.\n\n```text\nMQTT Publish-Subscribe Architecture:\n[Publisher Node] ---> (Publish: topic/temp = 24C) ---> [Broker] ---> [Subscribed Clients]\n```"
          },
          {
            id: "iot-c2-2",
            question: "Compare MQTT with CoAP (Constrained Application Protocol).",
            answer: "MQTT is broker-based running on TCP; CoAP is request-response running on lightweight UDP.",
            explanation: "1. **MQTT**: Runs on TCP, providing reliable connections but higher packet overhead. Uses a central Broker to manage channels.\n2. **CoAP**: Runs on UDP, reducing latency and handshakes. It closely mirrors HTTP (using GET, POST, PUT, DELETE) but is optimized for constrained M2M environments."
          },
          {
            id: "iot-c2-3",
            question: "Explain the role of LoRaWAN in long-range, low-power IoT networking.",
            answer: "It allows communication over long distances (up to 15km) with minimal power using spread spectrum modulation.",
            explanation: "LoRa (Long Range) is a physical layer tech using Chirp Spread Spectrum modulation. **LoRaWAN** is the media access control layer protocol on top. It is perfect for agricultural sensors, tracking cattle, or municipal monitoring because nodes can transmit tiny data payloads across miles while running on a single coin battery for 5+ years."
          },
          {
            id: "iot-c2-4",
            question: "What is Zigbee and where is it typically deployed?",
            answer: "A low-power wireless mesh standard widely used for localized smart home control.",
            explanation: "Zigbee is a wireless standard built on IEEE 802.15.4. It operates in mesh topologies, meaning every device can relay data for its neighbors, extending network ranges. It operates on ultra-low power, allowing devices like motion sensors to run for years on a coin cell, and is commonly used in home hubs."
          },
          {
            id: "iot-c2-5",
            question: "What does 'Quality of Service' (QoS) represent in MQTT?",
            answer: "The agreement between sender and receiver regarding message delivery reliability.",
            explanation: "QoS levels manage message delivery reliability:\n- **QoS 0 (Fire & Forget)**: Fast, no confirmation, risk of lost packets.\n- **QoS 1 (Acknowledge)**: Re-sends until a feedback ACK is received, guarantees delivery but can result in duplicate packets.\n- **QoS 2 (Four-step handshake)**: Guarantees exactly one delivery without duplicates. Heaviest overhead."
          }
        ]
      },
      {
        id: "iot-ch3",
        num: "Chapter 3",
        title: "Application of IoT",
        cards: [
          {
            id: "iot-c3-1",
            question: "How is IoT applied in Smart Agriculture?",
            answer: "Using soil moisture sensors and automated irrigation gates to save water and improve crop yields.",
            explanation: "Farmers place IoT nodes in fields to continually monitor soil nitrogen, phosphorus, potassium, moisture, and temperature. Gateways aggregate this data and automatically trigger smart irrigation valves only when soil moisture falls below a critical threshold, saving immense amounts of water."
          },
          {
            id: "iot-c3-2",
            question: "What is Industrial IoT (IIoT), and explain Predictive Maintenance.",
            answer: "Connecting industrial machinery to monitor operations and predict breakdowns before they happen.",
            explanation: "IIoT uses high-frequency vibration sensors, thermal cameras, and acoustic sensors attached to factory turbines or assembly lines. AI algorithms analyze these sensor feeds to detect minor mechanical wear. The system schedules maintenance *before* a catastrophic breakdown occurs, avoiding costly production downtime."
          },
          {
            id: "iot-c3-3",
            question: "Describe how IoT coordinates Smart Cities.",
            answer: "Through smart streetlights, trash monitors, intelligent parking guidance, and traffic controllers.",
            explanation: "Smart cities utilize network nodes to optimize municipal operations:\n- **Trash bins** report their fill level so trucks only visit full bins.\n- **Streetlights** dim dynamically when no pedestrians are nearby.\n- **Parking spots** detect vehicle presence and guide drivers via mobile apps to reduce gridlocks."
          },
          {
            id: "iot-c3-4",
            question: "Explain the role of IoT in Remote Patient Monitoring (Healthcare).",
            answer: "Wearable biosensors tracking vitals (heart rate, glucose) and alerting doctors during emergency events.",
            explanation: "Patients wear smart patches or wristbands that continuously monitor cardiac telemetry or blood glucose levels. If a dangerous arrhythmia or sudden sugar crash is detected, the device transmits an automated emergency alert directly to the physician's portal, enabling immediate medical response."
          },
          {
            id: "iot-c3-5",
            question: "What is a Smart Home ecosystem, and how do voice assistants/hubs act as coordinators?",
            answer: "A unified system of interconnected home appliances managed by a central intelligent hub.",
            explanation: "A smart home links security cameras, locks, thermostats, and lights. Central systems (like Apple HomeKit, Google Home, or Home Assistant) integrate these devices using uniform protocols, allowing automated actions (e.g. locking doors and turning off HVAC when the geolocation indicates the user left home)."
          }
        ]
      }
    ]
  },
  fds: {
    title: "Fundamentals of Data Structures",
    chapters: [
      {
        id: "fds-ch1",
        num: "Chapter 1",
        title: "Pointers",
        cards: [
          {
            id: "fds-c1-1",
            question: "What is a Pointer, and what does it store?",
            answer: "A variable that stores the memory address of another variable rather than a direct value.",
            explanation: "Pointers allow programs to reference memory locations directly. A normal integer variable stores a value (e.g. `25`), while a pointer to that integer stores the physical hex address (e.g. `0x7ffee3bf4a8c`) where that integer is kept in RAM.\n\n```cpp\n// C++ Pointer Declaration\nint x = 25;\nint* ptr = &x; // ptr stores address of x\n```"
          },
          {
            id: "fds-c1-2",
            question: "Explain the purpose of the address-of operator (&) and dereference operator (*).",
            answer: "& extracts the memory address of a variable; * retrieves the value stored at a pointer's address.",
            explanation: "- **& (Address-of Operator)**: Placed before a variable to get its reference address.\n- **\\* (Dereference Operator)**: Placed before a pointer variable to 'look inside' that memory address and read or modify the actual value residing there."
          },
          {
            id: "fds-c1-3",
            question: "What is a Null Pointer, and why is it crucial to check for it?",
            answer: "A pointer that points to nothing (address 0); checking prevents segmentation faults and crashes.",
            explanation: "In C++, a null pointer is declared using `nullptr` (or `NULL` in C). If a program attempts to dereference a null pointer (reading or writing to address 0), the operating system immediately halts the application with a **Segmentation Fault**. Therefore, robust code always checks `if (ptr != nullptr)` before accessing pointer content."
          },
          {
            id: "fds-c1-4",
            question: "What is a Double Pointer (pointer-to-pointer), and provide a typical use case.",
            answer: "A variable that stores the memory address of another pointer; used to modify pointer arguments inside functions.",
            explanation: "A double pointer holds the reference to another pointer: `int** dptr = &ptr;`. They are essential when you want to change the address a pointer is pointing to from inside a helper function (such as dynamically allocating a new array or manipulating node pointers in hierarchical tree structures)."
          },
          {
            id: "fds-c1-5",
            question: "Explain how dynamic memory allocation causes a Memory Leak if pointers are neglected.",
            answer: "When memory is allocated on the heap but its pointer is lost without freeing it.",
            explanation: "When you allocate memory on the heap (using `new` in C++ or `malloc` in C), the OS keeps that memory marked as 'busy'. Unlike stack memory, heap memory must be manually deallocated using `delete` or `free`. If the pointer storing that address goes out of scope or is overwritten, the memory remains allocated but unreachable, causing a leak that can consume all RAM."
          }
        ]
      },
      {
        id: "fds-ch2",
        num: "Chapter 2",
        title: "Stack",
        cards: [
          {
            id: "fds-c2-1",
            question: "What structural principle governs a Stack, and what are its two primary operations?",
            answer: "LIFO (Last In, First Out); core operations are Push and Pop.",
            explanation: "A Stack operates like a stack of cafeteria trays. The last tray placed on the stack is the first one removed. \n- **Push**: Adds an element to the top of the stack.\n- **Pop**: Removes and returns the element at the top of the stack.\nBoth operations occur in constant time $O(1)$ because they only manipulate the top element."
          },
          {
            id: "fds-c2-2",
            question: "What are Stack Overflow and Stack Underflow errors?",
            answer: "Overflow occurs when pushing to a full stack; Underflow occurs when popping from an empty stack.",
            explanation: "- **Stack Overflow**: Occurs when you attempt to add an item but the stack has reached its allocated capacity limit (e.g. running infinite recursive functions which exhaust the call stack).\n- **Stack Underflow**: Occurs when you attempt to retrieve or delete an element from a stack that contains zero elements, resulting in a program crash or exception."
          },
          {
            id: "fds-c2-3",
            question: "How is a Stack used by compilers to check for balanced brackets in expressions?",
            answer: "By pushing opening brackets onto a stack and popping to match them against closing brackets.",
            explanation: "Compilers scan syntax from left to right:\n1. If an opening bracket `(`, `[`, or `{` is encountered, push it onto the stack.\n2. If a closing bracket `)`, `]`, or `}` is encountered, check the stack. If the stack is empty or the popped top bracket doesn't match, the expression is unbalanced.\n3. At the end, if the stack is completely empty, the brackets are balanced."
          },
          {
            id: "fds-c2-4",
            question: "How does the CPU Call Stack manage function activation frames?",
            answer: "By pushing local variables and return addresses when a function is called, and popping them on return.",
            explanation: "Every time a function is called, the CPU creates an **Activation Record (Stack Frame)** containing that function's parameters, local variables, and the return instruction address. This frame is pushed onto the global Call Stack. When the function returns, its frame is popped off, resuming execution in the parent function frame."
          },
          {
            id: "fds-c2-5",
            question: "Compare Stack implementation using a Dynamic Array versus a Linked List.",
            answer: "Arrays offer better cache locality but can require $O(N)$ resizes; Linked Lists offer true $O(1)$ bounds.",
            explanation: "- **Dynamic Array Stack**: Elements are adjacent in memory, optimizing CPU cache. However, if the array fills up, it must allocate a larger block and copy all elements, costing $O(N)$ on that push.\n- **Linked List Stack**: Elements are nodes connected by pointers. Pushes are always $O(1)$ because you simply allocate a new node and make it the new head, but pointer links introduce memory overhead."
          }
        ]
      },
      {
        id: "fds-ch3",
        num: "Chapter 3",
        title: "Queue",
        cards: [
          {
            id: "fds-c3-1",
            question: "What structural principle governs a Queue, and what are its two primary operations?",
            answer: "FIFO (First In, First Out); core operations are Enqueue and Dequeue.",
            explanation: "A Queue operates like a line of people waiting at a checkout counter. The first person to join the queue is the first to be served. \n- **Enqueue**: Adds an element to the rear of the queue.\n- **Dequeue**: Removes and returns the element at the front of the queue.\nBoth operations occur in constant time $O(1)$ when implemented correctly."
          },
          {
            id: "fds-c3-2",
            question: "What is the primary limitation of a simple array-based queue, and how does a Circular Queue resolve it?",
            answer: "Dequeuing leaves empty front slots that go unused; Circular Queue wraps indices to reuse them.",
            explanation: "In a basic array-based queue, as elements are dequeued, the front pointer moves forward, leaving vacant slots at the start of the array that cannot be reused without shifting all elements (which is slow). A **Circular Queue** treats the array as a closed loop. Front and Rear pointers wrap around using modulo arithmetic: `rear = (rear + 1) % capacity`. This reuses vacant slots, preventing unnecessary array shifting."
          },
          {
            id: "fds-c3-3",
            question: "What is a Priority Queue, and how does it differ from a standard queue?",
            answer: "Elements are dequeued based on priority level rather than simple arrival sequence.",
            explanation: "In a Priority Queue, every element has an associated priority rank. When dequeueing, the element with the highest priority is extracted first. If two elements share the same priority, they are served in FIFO order. Priority Queues are typically implemented using **Heaps** to maintain efficient logarithmic insertions and extractions."
          },
          {
            id: "fds-c3-4",
            question: "Define a Double-Ended Queue (Deque) and its distinct advantage.",
            answer: "A queue where elements can be enqueued or dequeued from both the front and the rear.",
            explanation: "A Deque (pronounced 'deck') combines stack and queue mechanics. It supports four fundamental operations:\n- `insertFront()` and `deleteFront()`\n- `insertLast()` and `deleteLast()`\nThis is useful for algorithms like sliding window maximums, BFS search optimizations, and browser history tracking."
          },
          {
            id: "fds-c3-5",
            question: "Give a practical application of Queues in operating systems and network infrastructures.",
            answer: "Printer job spooling, CPU packet processing, and router buffer queues.",
            explanation: "Queues are essential when resources are shared among multiple consumers. For example:\n- **Printer Spoolers** enqueue print jobs in the exact order they were requested.\n- **Network Routers** queue incoming packets in buffers when traffic spikes, transmitting them sequentially using a FIFO pipeline."
          }
        ]
      }
    ]
  },
  oops: {
    title: "Object-Oriented Programming",
    chapters: [
      {
        id: "oops-ch1",
        num: "Chapter 1",
        title: "Polymorphism",
        cards: [
          {
            id: "oops-c1-1",
            question: "What is Polymorphism?",
            answer: "The ability of different objects to respond uniquely to the same unified interface or method call.",
            explanation: "Derived from Greek ('many forms'), polymorphism allows writing flexible code. You can define a parent reference type (e.g. `Shape`) and call `draw()`. If the active object is a `Circle`, it draws a circle; if a `Square`, it draws a square. The calling code does not need to know the specific subclass, making it easy to add new subclasses later without modifying existing functions."
          },
          {
            id: "oops-c1-2",
            question: "Differentiate between Compile-Time and Runtime Polymorphism.",
            answer: "Compile-time is resolved by overloaded signatures; Runtime is resolved by virtual method overrides.",
            explanation: "- **Compile-Time Polymorphism (Static Binding)**: Achieved via method overloading and operator overloading. The compiler determines which method to call based on parameter lists during compilation.\n- **Runtime Polymorphism (Dynamic Binding)**: Achieved via virtual functions and inheritance. The exact method implementation is resolved at runtime based on the actual object type in memory."
          },
          {
            id: "oops-c1-3",
            question: "What is Method Overloading, and what are its rules?",
            answer: "Declaring multiple methods in the same class with identical names but different parameter lists.",
            explanation: "Method overloading increases readability. To overload a method, the parameter list *must* differ in number, order, or data types of the parameters. The return type alone cannot be used to distinguish between overloaded methods.\n\n```cpp\n// Overloaded functions\nvoid print(int x);\nvoid print(double x);\nvoid print(string s);\n```"
          },
          {
            id: "oops-c1-4",
            question: "What is Method Overriding, and how does it function?",
            answer: "A subclass redefining a parent method with identical signature to customize its behavior.",
            explanation: "When a child class overrides a method from its parent class, the child's implementation takes precedence when invoked on child instances. To facilitate dynamic dispatch (runtime polymorphism) in languages like C++, the parent method must be declared with the `virtual` keyword, allowing the program to choose the correct subclass method at runtime."
          },
          {
            id: "oops-c1-5",
            question: "Explain the mechanics of a Virtual Table (Vtable) and Virtual Pointer (Vptr) in C++.",
            answer: "A table of function pointers used to resolve virtual methods at runtime via an object's virtual pointer.",
            explanation: "When a class declares a virtual function, the compiler creates a **vtable** for that class containing pointers to its virtual methods. Each object of that class gets a hidden pointer (**vptr**) pointing to that vtable. When a virtual function is called via a parent pointer, the system looks up the vptr, retrieves the function address from the vtable, and executes it. This dynamic lookup adds a small runtime overhead."
          }
        ]
      },
      {
        id: "oops-ch2",
        num: "Chapter 2",
        title: "Inheritance",
        cards: [
          {
            id: "oops-c2-1",
            question: "What is Inheritance, and what relationship does it establish?",
            answer: "A mechanism where a child class acquires fields and methods of a parent class, creating an 'is-a' relationship.",
            explanation: "Inheritance promotes code reuse by allowing a derived class to inherit variables and methods from a base class. For example, a `Dog` class inherits from `Animal`, inheriting common attributes like `age` and `weight`, while adding its own distinct behaviors (e.g. `bark()`)."
          },
          {
            id: "oops-c2-2",
            question: "Differentiate between Single, Multiple, Multilevel, and Hierarchical inheritance.",
            answer: "Single: One parent; Multiple: Multiple parents; Multilevel: Grandparent chain; Hierarchical: Multiple child classes.",
            explanation: "- **Single**: Class B inherits from Class A.\n- **Multiple**: Class C inherits from Class A and Class B (can create structural ambiguity).\n- **Multilevel**: Class C inherits from B, which inherits from A.\n- **Hierarchical**: Class B and Class C both inherit independently from Class A."
          },
          {
            id: "oops-c2-3",
            question: "What is the Diamond Problem in Multiple Inheritance, and how does C++ resolve it?",
            answer: "Ambiguity when a child inherits a duplicate base method from two parents; resolved via Virtual Inheritance.",
            explanation: "If Class D inherits from both Class B and Class C, which both inherit from Class A, Class D receives two duplicate copies of Class A's fields and methods. If Class D attempts to call a method from Class A, the compiler throws an ambiguity error. In C++, this is resolved using **Virtual Inheritance** (`class B : virtual public A`), which ensures only one shared copy of the grandparent class is constructed."
          },
          {
            id: "oops-c2-4",
            question: "Explain access specifiers (public, protected, private) in the context of Inheritance.",
            answer: "Public: Inherited publicly; Protected: Inherited but restricted; Private: Hidden from derived classes.",
            explanation: "Access boundaries during inheritance:\n- **Public**: Public members of parent remain public in child, protected remain protected.\n- **Protected**: Public and protected members of parent become protected in child, accessible to subclasses but not outside classes.\n- **Private**: All inherited members become private in child. Furthermore, actual private members of the parent are never directly accessible by derived subclasses."
          },
          {
            id: "oops-c2-5",
            question: "What is the execution order of Constructors and Destructors in an inheritance chain?",
            answer: "Constructors execute from parent to child; Destructors execute in reverse from child to parent.",
            explanation: "When an object of a derived class is created:\n1. The parent constructor runs first to initialize the base fields.\n2. The child constructor runs next to initialize the specialized child fields.\nWhen the object is destroyed, the child destructor executes first, followed by the parent destructor, ensuring clean destruction of resources."
          }
        ]
      },
      {
        id: "oops-ch3",
        num: "Chapter 3",
        title: "Templates and STL",
        cards: [
          {
            id: "oops-ch3-1",
            question: "What are Templates in C++, and how do they enable Generic Programming?",
            answer: "Code blueprints that allow classes and functions to operate on parameterized data types without code duplication.",
            explanation: "Templates allow you to write a single function or class that works with any data type. When you call the template, the compiler automatically generates a specific version of the code for that data type (e.g. generating an integer stack or a double stack from a single template blueprint).\n\n```cpp\n// C++ Function Template\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n```"
          },
          {
            id: "oops-ch3-2",
            question: "What is the C++ Standard Template Library (STL), and what are its three core pillars?",
            answer: "A library of generic containers and algorithms; built on Containers, Iterators, and Algorithms.",
            explanation: "The STL provides a rich set of pre-written data structures and functions:\n1. **Containers**: Structures that hold data (e.g. vectors, lists, maps).\n2. **Iterators**: Pointer-like objects that traverse containers.\n3. **Algorithms**: Built-in functions that process container elements (e.g. sorting, searching, reversing)."
          },
          {
            id: "oops-ch3-3",
            question: "Explain the std::vector container and its advantages over primitive arrays.",
            answer: "A dynamic array that manages its own memory and grows automatically when elements are added.",
            explanation: "Unlike static arrays which require a fixed compile-time size, `std::vector` allocates heap memory and dynamically resizes. It provides fast $O(1)$ random access, keeps track of its own size, and handles deallocation automatically when the vector variable falls out of scope."
          },
          {
            id: "oops-ch3-4",
            question: "What is an STL Iterator, and why is it considered a bridge?",
            answer: "An abstraction pointing to container elements, allowing algorithms to process containers uniformly.",
            explanation: "Iterators behave like pointers, supporting operators like `*` (dereference) and `++` (increment). They provide a standard interface to traverse different container structures: you can use the exact same algorithm code to traverse a `std::vector` (contiguous memory) and a `std::list` (doubly linked list node chain) because both support the same iterator methods."
          },
          {
            id: "oops-ch3-5",
            question: "Describe three highly optimized algorithms provided in the C++ <algorithm> header.",
            answer: "std::sort() (logarithmic sorting), std::find() (linear search), and std::binary_search() (binary search).",
            explanation: "- **std::sort()**: Typically implemented as Introsort (a hybrid of Quicksort, Heapsort, and Insertion Sort), sorting elements in $O(N \\log N)$ time.\n- **std::find()**: Linearly scans a range for a target, returning an iterator to it in $O(N)$ time.\n- **std::binary_search()**: Performs binary search on a sorted collection, returning `true` or `false` in $O(\\log N)$ time."
          }
        ]
      }
    ]
  }
};

// Application State Variables
let loadedSubjects = {}; // On-demand dynamic CSV loader tracking state
let currentSubject = "";
let currentChapterId = "";
let currentDeckCards = [];
let currentCardIndex = 0;

// Scoring & Metrics trackers
let scoreCorrect = 0;
let scoreIncorrect = 0;
let reviewedCardsState = {}; // Tracks user's review status (correct/incorrect) per card ID in active deck

// Cache for Chat history in current study session (mapped by chapter ID)
let chatHistories = {};

// Reference Sheets Database mapped to local course syllabus diagrams
const referenceSheets = {
  fds: [
    { title: "Chapter 1: Pointers Reference Map", file: "files/pointers.png", desc: "Detailed pointers declaration, operators, and address lookup maps." },
    { title: "Chapter 2: Stack Structure Reference Map", file: "files/Stack.png", desc: "LIFO structural execution, stack pointers, push and pop dynamics." },
    { title: "Chapter 3: Queue Structure Reference Map", file: "files/Queue.png", desc: "FIFO execution, queue buffers, front and rear tracking." },
    { title: "Unit 3: Advanced Data Structures Reference", file: "files/Unit 3 fds.png", desc: "Concepts of trees, binary search trees, and traversal techniques." },
    { title: "Unit 4: Dynamic Graphs & Path Finding", file: "files/Unit 4 fds.png", desc: "Graph representations, BFS/DFS explorations, and shortest path maps." },
    { title: "Unit 5: Search & Sorting Reference", file: "files/Unit 5 fds.png", desc: "Hashing methodologies, bubble search, and quicksort complexities." }
  ],
  oops: [
    { title: "Chapter 1: Polymorphism Execution Map", file: "files/Polymorphism.png", desc: "Dynamic dispatch borders, function overloading, and virtual pointer tables." },
    { title: "Chapter 2: Class Inheritance Hierarchy Map", file: "files/Inheritance.png", desc: "Parent/child visibility domains, protected spaces, and base initializers." },
    { title: "Chapter 3: Templates & STL Reference Sheet", file: "files/Template & STL.png", desc: "Generics definition, vector buffers, and standard algorithm spaces." },
    { title: "Unit 3: Advanced Polymorphism Reference", file: "files/Unit 3 oop.png", desc: "Virtual functions, abstraction levels, and run-time execution paths." },
    { title: "Unit 4: Object Lifecycle & Streams", file: "files/Unit 4 oop.png", desc: "Constructor cascades, file storage streaming, and stream operators." },
    { title: "Unit 5: Exception Frameworks & Templates", file: "files/Unit 5 oop.png", desc: "Try-catch execution boundaries, customized exception throwing guidelines." }
  ],
  iot: [
    { title: "Chapter 1: M2M Communication Architecture", file: "files/m2m.png", desc: "Machine-to-Machine interface boundaries, system domains, and gateway maps." },
    { title: "Chapter 2: IoT Communication Protocols", file: "files/Comm pro.png", desc: "Comparative suites of MQTT brokers, CoAP nodes, HTTP overhead, and mesh topologies." },
    { title: "Chapter 3: Real-World IoT Applications", file: "files/appli iot.png", desc: "Detailed smart city grids, precision farming nodes, healthcare devices, and logistics chains." },
    { title: "Unit 3: Sensors, Actuators & Embedded Systems", file: "files/Unit 3 iot.png", desc: "Interfacing controllers (Arduino/ESP32) with digital and analog sensors." },
    { title: "Unit 4: Low-Power WAN & IoT Gateways", file: "files/Unit 4 iot.png", desc: "LoRaWAN architecture, Zigbee routing, and border gateway controllers." },
    { title: "Unit 5: IoT Security Frameworks & Edge Nodes", file: "files/Unit 5 iot.png", desc: "End-to-end encryption protocols, secure bootstrapping, and edge analytics." }
  ]
};

// DOM Element References
const screenSubjects = document.getElementById("screen-subjects");
const screenChapters = document.getElementById("screen-chapters");
const screenPlayer = document.getElementById("screen-player");
const screenCompleted = document.getElementById("screen-completed");

const headerLogo = document.getElementById("header-logo");
const navStatsCount = document.getElementById("nav-stats-count");
const csvFilePicker = document.getElementById("csv-file-picker");
const csvDropArea = document.getElementById("csv-drop-area");

const chaptersBackBtn = document.getElementById("chapters-back-btn");
const chaptersSubjectTag = document.getElementById("chapters-subject-tag");
const chaptersSubjectTitle = document.getElementById("chapters-subject-title");
const chaptersStatTotal = document.getElementById("chapters-stat-total");
const chaptersStatCards = document.getElementById("chapters-stat-cards");
const chaptersListContainer = document.getElementById("chapters-list-container");

const playerDeckTitle = document.getElementById("player-deck-title");
const playerDeckSubtitle = document.getElementById("player-deck-subtitle");
const playerFullscreenBtn = document.getElementById("player-fullscreen-btn");
const playerCloseBtn = document.getElementById("player-close-btn");
const cardCountIndicator = document.getElementById("card-count-indicator");
const cardCountIndicatorBack = document.getElementById("card-count-indicator-back");
const cardQuestionText = document.getElementById("card-question-text");
const cardAnswerText = document.getElementById("card-answer-text");
const flashcardElement = document.getElementById("flashcard-element");
const card3dWrapper = document.getElementById("card-3d-wrapper");

const playerPrevBtn = document.getElementById("player-prev-btn");
const playerNextBtn = document.getElementById("player-next-btn");
const playerIncorrectBtn = document.getElementById("player-incorrect-btn");
const playerCorrectBtn = document.getElementById("player-correct-btn");
const playerScoreIncorrect = document.getElementById("player-score-incorrect");
const playerScoreCorrect = document.getElementById("player-score-correct");
const playerExplainBtn = document.getElementById("player-explain-btn");

const playerThumbsUp = document.getElementById("player-thumbs-up");
const playerThumbsDown = document.getElementById("player-thumbs-down");

const completedDeckDesc = document.getElementById("completed-deck-desc");
const completedScoreCorrect = document.getElementById("completed-score-correct");
const completedScoreIncorrect = document.getElementById("completed-score-incorrect");
const completedRestartBtn = document.getElementById("completed-restart-btn");
const completedHomeBtn = document.getElementById("completed-home-btn");

const confirmModal = document.getElementById("confirm-modal");
const confirmDeckTitle = document.getElementById("confirm-deck-title");
const confirmDeckDetails = document.getElementById("confirm-deck-details");
const confirmCancelBtn = document.getElementById("confirm-cancel-btn");
const confirmStartBtn = document.getElementById("confirm-start-btn");

const drawerOverlay = document.getElementById("drawer-overlay");
const drawerElement = document.getElementById("drawer-element");
const drawerCloseBtn = document.getElementById("drawer-close-btn");
const drawerChatContainer = document.getElementById("drawer-chat-container");
const drawerChatForm = document.getElementById("drawer-chat-form");
const drawerChatInput = document.getElementById("drawer-chat-input");
const bgDynamicGlow = document.getElementById("bg-dynamic-glow");

// Track active targeted chapter modal launch
let activeChapterModal = null;

// ==========================================================================
// VIEW ROUTER & NAVIGATION CONTROLLER
// ==========================================================================

function navigateToScreen(screenId) {
  // Hide all screens
  [screenSubjects, screenChapters, screenPlayer, screenCompleted].forEach(screen => {
    screen.classList.remove("active");
  });

  // Reset 3D card state
  flashcardElement.classList.remove("flipped");

  // Show selected screen with fade-in transition
  setTimeout(() => {
    if (screenId === "subjects") {
      screenSubjects.classList.add("active");
      updateGlobalStatsBadge();
      updateDynamicGlowColor("#3b82f6"); // Default blue glow
    } else if (screenId === "chapters") {
      screenChapters.classList.add("active");
      renderChaptersScreen();
    } else if (screenId === "player") {
      screenPlayer.classList.add("active");
      initializeCardPlayer();
    } else if (screenId === "completed") {
      screenCompleted.classList.add("active");
      showCompletionSummary();
    }
  }, 50);
}

// Update the global header stats badge dynamically
function updateGlobalStatsBadge() {
  let totalCards = 0;
  Object.keys(appDatabase).forEach(subjectKey => {
    appDatabase[subjectKey].chapters.forEach(chapter => {
      totalCards += chapter.cards.length;
    });
  });
  navStatsCount.textContent = `${totalCards} Cards`;
}

// Dynamic Radial Glow Controller
function updateDynamicGlowColor(hexColor) {
  bgDynamicGlow.style.background = `radial-gradient(circle, ${hexColor}1a 0%, ${hexColor}00 70%)`;
}

// ==========================================================================
// DYNAMIC COMPONENT RENDERING
// ==========================================================================

// Subject Grid Rendering
// Subject Grid Rendering (enriched for absolute performance and 0 layout shifts)
function renderSubjectCards() {
  Object.keys(appDatabase).forEach(subjectKey => {
    const subject = appDatabase[subjectKey];
    
    // Select the existing static card from DOM
    const card = document.querySelector(`.subject-card.${subjectKey}`);
    if (!card) return;

    // Calculate stats
    const chapterCount = subject.chapters.length;
    let cardCount = 0;
    subject.chapters.forEach(ch => { cardCount += ch.cards.length; });

    // Determine visual subtitles & dynamic SVGs
    let subtitle = "Sleek class design";
    let graphicSvg = "";
    
    if (subjectKey === "iot") {
      subtitle = "High-fidelity";
      graphicSvg = `
        <svg class="subject-illustration" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="iotGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="var(--accent-cyan)" stop-opacity="0.25" />
              <stop offset="100%" stop-color="var(--accent-cyan)" stop-opacity="0" />
            </radialGradient>
            <filter id="neonGlowIot" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="160" cy="90" r="70" fill="url(#iotGlow)" />
          
          <!-- Connection Lines -->
          <path d="M160 90 L110 50 H70" stroke="var(--accent-cyan)" stroke-width="2" filter="url(#neonGlowIot)" opacity="0.8" />
          <path d="M160 90 L110 130 H75" stroke="var(--accent-cyan)" stroke-width="2" />
          <path d="M160 90 L210 50 H250" stroke="var(--accent-cyan)" stroke-width="2" />
          <path d="M160 90 L210 130 H245" stroke="var(--accent-cyan)" stroke-width="2" filter="url(#neonGlowIot)" opacity="0.8" />
          <path d="M160 90 V40" stroke="var(--accent-cyan)" stroke-width="2" stroke-dasharray="4 4" />
          
          <!-- Center Pulse -->
          <circle cx="160" cy="90" r="16" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2.5" filter="url(#neonGlowIot)" />
          <circle cx="160" cy="90" r="16" fill="none" stroke="var(--accent-cyan)" stroke-width="1" opacity="0.7">
            <animate attributeName="r" values="16;28;16" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="90" r="5" fill="var(--accent-cyan)" />
          
          <!-- Satellite Nodes -->
          <circle cx="70" cy="50" r="10" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2" />
          <circle cx="70" cy="50" r="4" fill="var(--accent-cyan)" />
          
          <circle cx="75" cy="130" r="10" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2" />
          <path d="M72 130h6M75 127v6" stroke="var(--accent-cyan)" stroke-width="1.5" />
          
          <circle cx="250" cy="50" r="10" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2" />
          <path d="M247 50h6" stroke="var(--accent-cyan)" stroke-width="1.5" />
          
          <circle cx="245" cy="130" r="10" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2" />
          <rect x="242" y="127" width="6" height="6" rx="1" fill="var(--accent-cyan)" />
          
          <circle cx="160" cy="40" r="10" fill="#090d16" stroke="var(--accent-cyan)" stroke-width="2" />
          
          <!-- Moving light signals -->
          <circle r="3" fill="#ffffff" filter="url(#neonGlowIot)">
            <animateMotion path="M160 90 L110 50 H70" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#ffffff" filter="url(#neonGlowIot)">
            <animateMotion path="M160 90 L210 130 H245" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      `;
    } else if (subjectKey === "fds") {
      subtitle = "Beautiful tree";
      graphicSvg = `
        <svg class="subject-illustration" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="fdsGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="var(--accent-magenta)" stop-opacity="0.25" />
              <stop offset="100%" stop-color="var(--accent-magenta)" stop-opacity="0" />
            </radialGradient>
            <filter id="neonGlowFds" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="160" cy="90" r="70" fill="url(#fdsGlow)" />
          
          <!-- Connections -->
          <line x1="160" y1="35" x2="105" y2="85" stroke="var(--accent-magenta)" stroke-width="2.5" filter="url(#neonGlowFds)" opacity="0.8" />
          <line x1="160" y1="35" x2="215" y2="85" stroke="var(--accent-magenta)" stroke-width="2.5" filter="url(#neonGlowFds)" opacity="0.8" />
          <line x1="105" y1="85" x2="70" y2="135" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.6" />
          <line x1="105" y1="85" x2="140" y2="135" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.6" />
          <line x1="215" y1="85" x2="180" y2="135" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.6" />
          <line x1="215" y1="85" x2="250" y2="135" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.6" />
          
          <!-- Nodes -->
          <!-- Level 0 -->
          <g class="float-tree-node">
            <circle cx="160" cy="35" r="14" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="2.5" filter="url(#neonGlowFds)" />
            <text x="160" y="39" fill="white" font-size="11" font-weight="800" text-anchor="middle" font-family="Outfit">1</text>
          </g>
          <!-- Level 1 -->
          <circle cx="105" cy="85" r="12" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="2" />
          <text x="105" y="89" fill="white" font-size="10" font-weight="800" text-anchor="middle" font-family="Outfit">0</text>
          
          <circle cx="215" cy="85" r="12" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="2" />
          <text x="215" y="89" fill="white" font-size="10" font-weight="800" text-anchor="middle" font-family="Outfit">1</text>
          
          <!-- Level 2 -->
          <circle cx="70" cy="135" r="10" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="1.5" />
          <text x="70" y="138" fill="white" font-size="9" font-weight="800" text-anchor="middle" font-family="Outfit">0</text>
          
          <circle cx="140" cy="135" r="10" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="1.5" />
          <text x="140" y="138" fill="white" font-size="9" font-weight="800" text-anchor="middle" font-family="Outfit">1</text>
          
          <circle cx="180" cy="135" r="10" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="1.5" />
          <text x="180" y="138" fill="white" font-size="9" font-weight="800" text-anchor="middle" font-family="Outfit">0</text>
          
          <circle cx="250" cy="135" r="10" fill="#090d16" stroke="var(--accent-magenta)" stroke-width="1.5" />
          <text x="250" y="138" fill="white" font-size="9" font-weight="800" text-anchor="middle" font-family="Outfit">1</text>
        </svg>
      `;
    } else {
      cssClass = "oops";
      subtitle = "Sleek class design";
      graphicSvg = `
        <svg class="subject-illustration" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="oopGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="var(--accent-purple)" stop-opacity="0.25" />
              <stop offset="100%" stop-color="var(--accent-purple)" stop-opacity="0" />
            </radialGradient>
            <filter id="neonGlowOop" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="160" cy="90" r="70" fill="url(#oopGlow)" />
          
          <!-- Class Boxes -->
          <!-- Parent Class -->
          <g class="float-class-box-1">
            <rect x="110" y="20" width="100" height="38" rx="6" fill="#090d16" stroke="var(--accent-purple)" stroke-width="2" filter="url(#neonGlowOop)" />
            <line x1="110" y1="34" x2="210" y2="34" stroke="var(--accent-purple)" stroke-width="1" opacity="0.4" />
            <text x="160" y="30" fill="white" font-size="9" font-weight="800" text-anchor="middle" font-family="Outfit">Class: Shape</text>
          </g>
          
          <!-- Connections -->
          <path d="M90 95v-18h140v18" stroke="var(--accent-purple)" stroke-width="1.5" />
          <path d="M160 58v19" stroke="var(--accent-purple)" stroke-width="1.5" />
          <polygon points="160,58 156,64 164,64" fill="var(--accent-purple)" />
          
          <!-- Child Classes -->
          <g class="float-class-box-2">
            <rect x="40" y="95" width="100" height="38" rx="6" fill="#090d16" stroke="var(--accent-purple)" stroke-width="1.5" />
            <line x1="40" y1="109" x2="140" y2="109" stroke="var(--accent-purple)" stroke-width="1" opacity="0.4" />
            <text x="90" y="105" fill="white" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Outfit">Circle</text>
          </g>
          
          <g class="float-class-box-3">
            <rect x="180" y="95" width="100" height="38" rx="6" fill="#090d16" stroke="var(--accent-purple)" stroke-width="1.5" />
            <line x1="180" y1="109" x2="280" y2="109" stroke="var(--accent-purple)" stroke-width="1" opacity="0.4" />
            <text x="230" y="105" fill="white" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Outfit">Square</text>
          </g>
        </svg>
      `;
    }

    // Enrich graphic section
    const graphicEl = card.querySelector(".subject-card-graphic");
    if (graphicEl && !graphicEl.querySelector("svg")) {
      graphicEl.innerHTML = graphicSvg;
    }

    // Enrich dynamic subtitle
    const descEl = card.querySelector(".subject-desc");
    if (descEl) {
      descEl.textContent = subtitle;
    }

    // Enrich metadata (chapters & cards counts)
    const metaEl = card.querySelector(".subject-meta");
    if (metaEl) {
      metaEl.innerHTML = `
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3.5A2.5 2.5 0 0 1 6.5 1M20 1v21"/></svg>
          ${chapterCount} Chapters
        </span>
        <span class="card-count-badge">${cardCount} Cards</span>
        <div class="arrow-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      `;
    }

    // Register event listeners only once to prevent memory leaks and redundant bounds
    if (!card.dataset.listenersBound) {
      // 3D Tilt interactive event listeners (pure vanilla mathematical tilt on hover)
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 15; // rotateX scale
        const angleY = (x - xc) / 15; // rotateY scale
        
        card.style.transform = `translateY(-6px) scale(1.01) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

      card.addEventListener("click", async () => {
        currentSubject = subjectKey;
        // Provide premium visual loading state during on-demand dynamic CSV retrieval
        card.classList.add("loading-on-demand");
        try {
          await ensureSubjectCSVLoaded(subjectKey);
        } catch (err) {
          console.error(`Dynamic loading failed for subject ${subjectKey}:`, err);
        } finally {
          card.classList.remove("loading-on-demand");
        }
        navigateToScreen("chapters");
      });

      card.dataset.listenersBound = "true";
    }
  });
}

// Chapters Screen Rendering
function renderChaptersScreen() {
  const subject = appDatabase[currentSubject];
  if (!subject) return;

  // Header Details
  chaptersSubjectTitle.textContent = subject.title;
  chaptersSubjectTag.textContent = `${subject.title} Overview`;
  chaptersStatTotal.textContent = subject.chapters.length;

  let totalCards = 0;
  subject.chapters.forEach(ch => { totalCards += ch.cards.length; });
  chaptersStatCards.textContent = totalCards;

  // Change Glow theme
  if (currentSubject === "iot") updateDynamicGlowColor("#06b6d4"); // Cyan
  else if (currentSubject === "fds") updateDynamicGlowColor("#ec4899"); // Pink
  else updateDynamicGlowColor("#8b5cf6"); // Purple

  chaptersListContainer.innerHTML = "";

  subject.chapters.forEach((chapter, index) => {
    const card = document.createElement("div");
    card.className = "chapter-card";
    card.innerHTML = `
      <div>
        <div class="chapter-num">Chapter ${index + 1}</div>
        <h3 class="chapter-title">${chapter.title}</h3>
      </div>
      <div class="chapter-footer">
        <span>${chapter.cards.length} Flashcards</span>
        <button class="chapter-btn">
          Study Deck
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      launchStartConfirmation(chapter);
    });

    chaptersListContainer.appendChild(card);
  });

  // Render Visual Reference Sheets dynamically
  renderReferenceSheets();
}

// Render dynamic visual reference sheets matching active subject
function renderReferenceSheets() {
  const container = document.getElementById("reference-sheets-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  const sheets = referenceSheets[currentSubject] || [];
  
  if (sheets.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        No visual reference maps currently loaded for this subject.
      </div>
    `;
    return;
  }
  
  sheets.forEach(sheet => {
    const card = document.createElement("div");
    card.className = "reference-card";
    
    const imgSrc = sheet.isPlaceholder ? "files/pointers.png" : sheet.file;
    const placeholderClass = sheet.isPlaceholder ? "blurred-placeholder" : "";
    
    card.innerHTML = `
      <div class="reference-img-wrap ${placeholderClass}">
        <img src="${imgSrc}" alt="${sheet.title}" width="320" height="180">
        <div class="reference-img-overlay">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          <span>Expand Reference Map</span>
        </div>
      </div>
      <div class="reference-card-body">
        <div class="reference-card-header-row">
          <h4 class="reference-card-title">${sheet.title}</h4>
          <a href="${imgSrc}" download="${sheet.title}.png" class="reference-download-btn" title="Download Reference Map" aria-label="Download ${sheet.title} Reference Map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>
        <p class="reference-card-desc">${sheet.desc}</p>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openLightbox(imgSrc, sheet.title);
    });
    
    const downloadBtn = card.querySelector(".reference-download-btn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Avoid triggering card click (lightbox)
      });
    }
    
    container.appendChild(card);
  });
}

// Lightbox controller actions
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxDownloadLink = document.getElementById("lightbox-download-link");

function openLightbox(src, title) {
  if (lightboxModal && lightboxImg && lightboxTitle) {
    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    
    if (lightboxDownloadLink) {
      lightboxDownloadLink.href = src;
      lightboxDownloadLink.download = `${title}.png`;
    }
    
    lightboxModal.classList.add("active");
  }
}

function closeLightbox() {
  if (lightboxModal) {
    lightboxModal.classList.remove("active");
  }
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}
if (lightboxModal) {
  lightboxModal.addEventListener("click", (e) => {
    // Dismiss lightbox on background overlay click only
    if (e.target === lightboxModal || (e.target.closest(".lightbox-content") === null && e.target.closest(".lightbox-actions-top") === null && e.target !== lightboxImg)) {
      closeLightbox();
    }
  });
}

// ==========================================================================
// START STUDY MODAL CONFIRMATION
// ==========================================================================

function launchStartConfirmation(chapter) {
  activeChapterModal = chapter;
  confirmDeckTitle.textContent = `Launch Chapter ${chapter.num.replace(/Chapter\s*/i, "")}?`;
  confirmDeckDetails.innerHTML = `
    You are about to start the flashcard deck for:<br>
    <strong>${chapter.title}</strong><br><br>
    This workspace includes <strong>${chapter.cards.length} highly conceptual study cards</strong> with custom explanation workflows.
  `;
  confirmModal.classList.add("active");
}

function closeConfirmationModal() {
  confirmModal.classList.remove("active");
  activeChapterModal = null;
}

confirmCancelBtn.addEventListener("click", closeConfirmationModal);

confirmStartBtn.addEventListener("click", () => {
  if (activeChapterModal) {
    currentChapterId = activeChapterModal.id;
    currentDeckCards = activeChapterModal.cards;
    closeConfirmationModal();
    navigateToScreen("player");
  }
});

// ==========================================================================
// FLASHCARD PLAYER CONTROLLER (NotebookLM inspired UI)
// ==========================================================================

function initializeCardPlayer() {
  const subject = appDatabase[currentSubject];
  const chapter = subject.chapters.find(ch => ch.id === currentChapterId);
  
  if (!chapter) return;

  // Set titles
  playerDeckTitle.textContent = chapter.title;
  playerDeckSubtitle.textContent = `Based on 1 structured resource • ${currentSubject.toUpperCase()} Study Vault`;

  // Reset indices & review parameters
  currentCardIndex = 0;
  scoreCorrect = 0;
  scoreIncorrect = 0;
  reviewedCardsState = {};

  updateScoreLabels();
  loadCardContent();
  updateThumbsState(false, false);
}

function loadCardContent() {
  if (currentDeckCards.length === 0) return;
  const activeCard = currentDeckCards[currentCardIndex];

  // Make sure card starts not flipped
  flashcardElement.classList.remove("flipped");

  // Renders text dynamically inside front and back face
  setTimeout(() => {
    cardQuestionText.textContent = activeCard.question;
    cardAnswerText.textContent = activeCard.answer;
    
    // Setup counters
    const counterStr = `${currentCardIndex + 1} / ${currentDeckCards.length}`;
    cardCountIndicator.textContent = counterStr;
    cardCountIndicatorBack.textContent = counterStr;

    // Load active score button status
    updateReviewButtonsState();
  }, 150);

  // Toggle prev/next button disable state
  playerPrevBtn.disabled = currentCardIndex === 0;
  
  // Right arrow icon updates color or goes to completion screen
  if (currentCardIndex === currentDeckCards.length - 1) {
    playerNextBtn.classList.remove("arrow-right");
    playerNextBtn.title = "Finish study deck";
  } else {
    playerNextBtn.classList.add("arrow-right");
    playerNextBtn.title = "Next flashcard";
  }
}

// 3D Click flipping listener
card3dWrapper.addEventListener("click", (e) => {
  // Prevent flipping card if clicking "Explain" button on the back of the card
  if (e.target.closest("#player-explain-btn")) return;
  
  flashcardElement.classList.toggle("flipped");
});

// Fullscreen capability implementation
playerFullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

// Close player button
playerCloseBtn.addEventListener("click", () => {
  navigateToScreen("chapters");
});

// Navigation logic
playerPrevBtn.addEventListener("click", () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    loadCardContent();
  }
});

playerNextBtn.addEventListener("click", () => {
  if (currentCardIndex < currentDeckCards.length - 1) {
    currentCardIndex++;
    loadCardContent();
  } else {
    // Reached the end of the study deck, route to completed summary screen
    navigateToScreen("completed");
  }
});

// Response Counters management
function registerReviewScore(isCorrect) {
  const activeCard = currentDeckCards[currentCardIndex];
  const cardId = activeCard.id;
  const previousState = reviewedCardsState[cardId];

  if (isCorrect) {
    if (previousState === "correct") {
      // Remove review
      delete reviewedCardsState[cardId];
      scoreCorrect--;
    } else {
      if (previousState === "incorrect") scoreIncorrect--;
      reviewedCardsState[cardId] = "correct";
      scoreCorrect++;
    }
  } else {
    if (previousState === "incorrect") {
      // Remove review
      delete reviewedCardsState[cardId];
      scoreIncorrect--;
    } else {
      if (previousState === "correct") scoreCorrect--;
      reviewedCardsState[cardId] = "incorrect";
      scoreIncorrect++;
    }
  }

  updateScoreLabels();
  updateReviewButtonsState();

  // Highlight card face dynamically based on user response
  const frontFace = document.querySelector(".card-face.front");
  if (reviewedCardsState[cardId] === "correct") {
    frontFace.style.borderColor = "var(--success)";
  } else if (reviewedCardsState[cardId] === "incorrect") {
    frontFace.style.borderColor = "var(--error)";
  } else {
    frontFace.style.borderColor = "";
  }
}

function updateScoreLabels() {
  playerScoreCorrect.textContent = scoreCorrect;
  playerScoreIncorrect.textContent = scoreIncorrect;
}

function updateReviewButtonsState() {
  const activeCard = currentDeckCards[currentCardIndex];
  const state = reviewedCardsState[activeCard.id];

  playerCorrectBtn.classList.remove("active");
  playerIncorrectBtn.classList.remove("active");

  if (state === "correct") {
    playerCorrectBtn.classList.add("active");
  } else if (state === "incorrect") {
    playerIncorrectBtn.classList.add("active");
  }
}

playerCorrectBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  registerReviewScore(true);
});

playerIncorrectBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  registerReviewScore(false);
});

// Thumbs feedback UI state togglers
function updateThumbsState(up, down) {
  playerThumbsUp.classList.remove("active");
  playerThumbsDown.classList.remove("active");
  if (up) playerThumbsUp.classList.add("active");
  if (down) playerThumbsDown.classList.add("active");
}

playerThumbsUp.addEventListener("click", () => {
  const isActive = playerThumbsUp.classList.contains("active");
  updateThumbsState(!isActive, false);
});

playerThumbsDown.addEventListener("click", () => {
  const isActive = playerThumbsDown.classList.contains("active");
  updateThumbsState(false, !isActive);
});

// ==========================================================================
// COMPLETED SUMMARY VIEW
// ==========================================================================

function showCompletionSummary() {
  const subject = appDatabase[currentSubject];
  const chapter = subject.chapters.find(ch => ch.id === currentChapterId);

  completedDeckDesc.innerHTML = `
    Phenomenal work! You have finished studying:<br>
    <strong>${chapter.title}</strong>.<br>
    Review accuracy metrics are listed below. Double check difficult cards in the explorer.
  `;
  completedScoreCorrect.textContent = scoreCorrect;
  completedScoreIncorrect.textContent = scoreIncorrect;
}

completedRestartBtn.addEventListener("click", () => {
  navigateToScreen("player");
});

completedHomeBtn.addEventListener("click", () => {
  navigateToScreen("subjects");
});

// ==========================================================================
// KEYBOARD SHORTCUTS INTEGRATION
// ==========================================================================

document.addEventListener("keydown", (e) => {
  // CRITICAL: Avoid hijacking space/arrows when user is actively writing in the chatbot text input
  if (document.activeElement === drawerChatInput) return;

  // Handle keys only when player is actively visible on screen
  if (!screenPlayer.classList.contains("active")) return;

  if (e.code === "Space") {
    e.preventDefault(); // Prevent standard page scroll
    flashcardElement.classList.toggle("flipped");
  } else if (e.code === "ArrowLeft") {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      loadCardContent();
    }
  } else if (e.code === "ArrowRight") {
    if (currentCardIndex < currentDeckCards.length - 1) {
      currentCardIndex++;
      loadCardContent();
    } else {
      navigateToScreen("completed");
    }
  } else if (e.code === "KeyC") {
    // Shortcut for correct review
    registerReviewScore(true);
  } else if (e.code === "KeyX") {
    // Shortcut for incorrect review
    registerReviewScore(false);
  }
});

// ==========================================================================
// SLIDING NOTEBOOKLM AI EXPLAIN DRAWER & SIMULATOR
// ==========================================================================

function toggleAIDrawer(open) {
  if (open) {
    drawerOverlay.classList.add("active");
    drawerElement.classList.add("active");
    loadAIChatHistory();
  } else {
    drawerOverlay.classList.remove("active");
    drawerElement.classList.remove("active");
  }
}

playerExplainBtn.addEventListener("click", () => {
  toggleAIDrawer(true);
});

drawerCloseBtn.addEventListener("click", () => {
  toggleAIDrawer(false);
});

drawerOverlay.addEventListener("click", () => {
  toggleAIDrawer(false);
});

// Simulated AI Explainer Core Logic
function loadAIChatHistory() {
  const activeCard = currentDeckCards[currentCardIndex];
  
  // Initialize dynamic history for this specific chapter card if empty
  if (!chatHistories[activeCard.id]) {
    const introductoryResponse = `
      <p>Hello! I am your <strong>EduSphere AI</strong> study assistant.</p>
      <p>Let's dissect this specific question from your deck:</p>
      <blockquote style="border-left:3px solid var(--accent-purple); padding-left:10px; margin: 10px 0; color:var(--text-secondary); font-style:italic;">
        "${activeCard.question}"
      </blockquote>
      <p><strong>Detailed Explanation:</strong></p>
      <p>${activeCard.explanation.replace(/\n/g, '<br>')}</p>
    `;

    chatHistories[activeCard.id] = [
      { sender: "assistant", content: introductoryResponse }
    ];
  }

  renderChatBubbles();
}

function renderChatBubbles() {
  const activeCard = currentDeckCards[currentCardIndex];
  const history = chatHistories[activeCard.id] || [];

  drawerChatContainer.innerHTML = "";

  history.forEach(message => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${message.sender}`;
    
    const avatarChar = message.sender === "user" ? "U" : "🤖";
    
    bubble.innerHTML = `
      <div class="bubble-avatar">${avatarChar}</div>
      <div class="bubble-content">
        ${message.content}
      </div>
    `;
    drawerChatContainer.appendChild(bubble);
  });

  // Render clickable follow-up suggested prompts if last message is from assistant
  const lastMsg = history[history.length - 1];
  if (lastMsg && lastMsg.sender === "assistant") {
    renderSuggestedPrompts();
  }

  // Auto-scroll chat window to bottom
  setTimeout(() => {
    drawerChatContainer.scrollTop = drawerChatContainer.scrollHeight;
  }, 100);
}

function renderSuggestedPrompts() {
  const activeCard = currentDeckCards[currentCardIndex];
  
  // Custom suggested questions based on the active topic subject
  let prompts = [
    "Explain this concept like I'm 5 years old.",
    "Show me a practical, simple real-world analogy.",
    "What are common mistakes students make on this topic?"
  ];

  if (currentSubject === "fds") {
    prompts.unshift("Can you provide a simple C++ code snippet representing this structure?");
  } else if (currentSubject === "oops") {
    prompts.unshift("Show me a clean Java code implementation of this concept.");
  } else if (currentSubject === "iot") {
    prompts.unshift("What hardware components or microcontrollers are typically used here?");
  }

  const promptContainer = document.createElement("div");
  promptContainer.className = "suggested-prompts";
  
  prompts.slice(0, 3).forEach(promptText => {
    const btn = document.createElement("button");
    btn.className = "suggested-prompt-btn";
    btn.textContent = promptText;
    btn.addEventListener("click", () => {
      triggerUserChatInput(promptText);
    });
    promptContainer.appendChild(btn);
  });

  drawerChatContainer.appendChild(promptContainer);
}

// Emulates a real-time chatbot response loading sequence
function triggerUserChatInput(text) {
  const activeCard = currentDeckCards[currentCardIndex];
  
  // Prevent DOM XSS injections by escaping raw HTML tags from user input
  const safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  // 1. Push user query
  chatHistories[activeCard.id].push({ sender: "user", content: safeText });
  renderChatBubbles();

  // 2. Generate detailed customized AI answers offline
  let aiAnswer = "";
  const lowText = text.toLowerCase();

  if (lowText.includes("5 years old")) {
    aiAnswer = `
      <p>Sure! Imagine a toy box. ${activeCard.question.includes("Constructor") ? "A <strong>Constructor</strong> is like the builder who builds the toy box clean and new before you put toys inside." : ""}</p>
      <p>Simply put: <strong>${activeCard.answer}</strong> means we set up everything neatly first, ensuring no dust gets inside and we know exactly where each block sits!</p>
    `;
  } else if (lowText.includes("analogy")) {
    aiAnswer = `
      <p>Let's map this to a kitchen analogy:</p>
      <p>Imagine a chef cooking in a restaurant. <strong>${activeCard.answer}</strong> is like setting up a clean cutting board and pre-sharpening knives before the first customer orders. If the board is messy or a knife is blunt (uninitialized or offset states), the entire soup is ruined!</p>
    `;
  } else if (lowText.includes("code") || lowText.includes("snippet")) {
    if (currentSubject === "oops") {
      aiAnswer = `
        <p>Here is a clean, robust Java snippet mapping out this exact structure:</p>
        <pre><code>// Encapsulated Class Definition
public class SmartSystem {
    private String nodeName; // Encapsulated variable

    // Constructor initialization
    public SmartSystem(String nodeName) {
        this.nodeName = nodeName;
    }

    public String getNodeName() {
        return this.nodeName;
    }
}</code></pre>
        <p>This exemplifies encapsulation and safe instantiation principles.</p>
      `;
    } else {
      aiAnswer = `
        <pre><code>// High Performance Data Structures representation
#include &lt;iostream&gt;

struct Node {
    int data;
    Node* next;
    
    // Constructor initialization
    Node(int val) : data(val), next(nullptr) {}
};</code></pre>
        <p>This snippet provides clear pointer bindings and deterministic initialization.</p>
      `;
    }
  } else if (lowText.includes("hardware") || lowText.includes("microcontroller")) {
    aiAnswer = `
      <p>For this specific IoT layer, developers typically deploy:</p>
      <ul>
        <li><strong>ESP32 Microcontrollers</strong>: Built-in Wi-Fi and Bluetooth BLE, running at 240MHz. Extremely cheap and powerful.</li>
        <li><strong>Arduino Nano 33 IoT</strong>: Compact form factor, perfect for modular sensor integrations.</li>
        <li><strong>Raspberry Pi Pico W</strong>: Dual core ARM Cortex-M0+ perfect for fast processing edge computations.</li>
      </ul>
    `;
  } else {
    aiAnswer = `
      <p>Excellent follow-up question regarding <strong>${activeCard.question}</strong>!</p>
      <p>The standard guideline for this topic emphasizes: <em>"${activeCard.answer}"</em>.</p>
      <p>In production pipelines, developers must continually monitor for edge failure scopes, verifying parameter inputs and maintaining strict validation parameters to ensure stability.</p>
    `;
  }

  // 3. Render typing indicator, then reveal message with transition delay
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "chat-bubble assistant typing-bubble";
  typingIndicator.innerHTML = `
    <div class="bubble-avatar">🤖</div>
    <div class="bubble-content" style="color:var(--text-muted);">EduSphere AI is composing a response...</div>
  `;
  drawerChatContainer.appendChild(typingIndicator);
  drawerChatContainer.scrollTop = drawerChatContainer.scrollHeight;

  setTimeout(() => {
    // Remove typing indicator
    const existingTyping = drawerChatContainer.querySelector(".typing-bubble");
    if (existingTyping) existingTyping.remove();

    chatHistories[activeCard.id].push({ sender: "assistant", content: aiAnswer });
    renderChatBubbles();
  }, 900);
}

drawerChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = drawerChatInput.value.trim();
  if (text === "") return;

  drawerChatInput.value = "";
  triggerUserChatInput(text);
});

// ==========================================================================
// DYNAMIC CSV FILE PARSER & INTERACTIVE DECK LOADER
// ==========================================================================

function handleCSVImport(csvText) {
  try {
    const parsedData = parseCSVString(csvText);
    if (parsedData.length === 0) {
      alert("Error: The uploaded CSV file appears to be completely empty.");
      return;
    }

    // Validate headers
    const headers = Object.keys(parsedData[0]).map(h => h.trim().toLowerCase());
    const required = ["subject", "chapter", "question", "answer"];
    const missing = required.filter(req => !headers.includes(req));

    if (missing.length > 0) {
      alert(`Invalid CSV Format! Missing required column headers: ${missing.join(", ")}.\nMake sure the top row has exactly: Subject, Chapter, Question, Answer`);
      return;
    }

    // Wipe current database and build dynamically from CSV contents!
    const newDatabase = {};

    parsedData.forEach((row, idx) => {
      const subjRaw = (row["subject"] || row["Subject"] || "").toString().trim();
      const chapRaw = (row["chapter"] || row["Chapter"] || "").toString().trim();
      const quest = (row["question"] || row["Question"] || "").toString().trim();
      const ans = (row["answer"] || row["Answer"] || "").toString().trim();
      
      // Explanation is optional; fallback to standard fallback text
      const expl = (row["explanation"] || row["Explanation"] || `No extra details loaded for this card. Ask MeruBot AI for a live explanation below!`).toString().trim();

      if (!subjRaw || !chapRaw || !quest || !ans) {
        console.warn(`Skipping invalid CSV row ${idx + 2}: Empty fields detected.`);
        return;
      }

      // Generate a subject key (slugify)
      const subjKey = subjRaw.toLowerCase().replace(/[^a-z0-9]/g, "-");

      if (!newDatabase[subjKey]) {
        newDatabase[subjKey] = {
          title: subjRaw,
          chapters: []
        };
      }

      // Find or create chapter inside subject
      let chapter = newDatabase[subjKey].chapters.find(ch => ch.title.toLowerCase() === chapRaw.toLowerCase());
      if (!chapter) {
        const chapIndex = newDatabase[subjKey].chapters.length + 1;
        chapter = {
          id: `${subjKey}-ch${chapIndex}`,
          num: `Chapter ${chapIndex}`,
          title: chapRaw,
          cards: []
        };
        newDatabase[subjKey].chapters.push(chapter);
      }

      // Append Card
      chapter.cards.push({
        id: `${subjKey}-c-${chapter.cards.length + 1}-${Math.random().toString(36).substr(2, 4)}`,
        question: quest,
        answer: ans,
        explanation: expl
      });
    });

    // Verify if we actually successfully imported any active flashcards
    const subjectsLoaded = Object.keys(newDatabase);
    if (subjectsLoaded.length === 0) {
      alert("Error parsing CSV: No valid flashcard rows were extracted. Double check formatting.");
      return;
    }

    // Swap active app database!
    appDatabase = newDatabase;
    
    // Smooth visual feedback: Flash the navbar stats and reload home screen
    const badge = document.getElementById("nav-stats");
    badge.style.boxShadow = "0 0 25px var(--accent-cyan)";
    badge.style.borderColor = "var(--accent-cyan)";
    
    setTimeout(() => {
      badge.style.boxShadow = "";
      badge.style.borderColor = "";
    }, 1500);

    alert(`Successfully loaded custom study materials! Imported ${subjectsLoaded.length} subjects.`);
    
    navigateToScreen("subjects");
    renderSubjectCards();
    
  } catch (error) {
    console.error("CSV Import Failure:", error);
    alert(`CSV Import Failed: ${error.message}`);
  }
}

// Secure comma-separated parsing algorithm (handles double quoted values containing commas)
function parseCSVString(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"'; // Doubled quote acts as escaped single quote
        i++;
      } else {
        inQuotes = !inQuotes; // Toggle quotes scope
      }
    } else if (c === ',' && !inQuotes) {
      row.push(""); // New field
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [""]; // New row
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }

  if (lines.length < 2) return [];

  // Extract headers
  const headers = lines[0].map(h => h.trim());
  const jsonArray = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i];
    if (values.length < headers.length) continue; // Skip malformed rows
    
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = values[idx] ? values[idx].trim() : "";
    });
    jsonArray.push(obj);
  }

  return jsonArray;
}

// File picker event triggers
const pickerEl = document.getElementById("csv-file-picker");
if (pickerEl) {
  pickerEl.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      handleCSVImport(evt.target.result);
    };
    reader.readAsText(file);
  });
}

// Drag and drop event triggers for custom files
const dropAreaEl = document.getElementById("csv-drop-area");
if (dropAreaEl) {
  dropAreaEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropAreaEl.classList.add("dragover");
  });

  dropAreaEl.addEventListener("dragleave", () => {
    dropAreaEl.classList.remove("dragover");
  });

  dropAreaEl.addEventListener("drop", (e) => {
    e.preventDefault();
    dropAreaEl.classList.remove("dragover");

    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".csv")) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        handleCSVImport(evt.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please drag and drop a valid .csv file!");
    }
  });
}

// Header logo trigger returns to home
headerLogo.addEventListener("click", () => {
  navigateToScreen("subjects");
});

// Chapters screen back nav trigger returns to home
chaptersBackBtn.addEventListener("click", () => {
  navigateToScreen("subjects");
});

// Dynamic Local CSV resource loader
// Dynamic Local CSV resource loader - lazy/on-demand version for absolute zero startup delay
async function ensureSubjectCSVLoaded(subjectKey) {
  if (loadedSubjects[subjectKey]) {
    return; // Already loaded in memory, return immediately
  }

  const fileMappings = {
    fds: [
      { chapterId: "fds-ch1", path: "files/pointers.csv" },
      { chapterId: "fds-ch2", path: "files/stack.csv" },
      { chapterId: "fds-ch3", path: "files/queue.csv" }
    ],
    oops: [
      { chapterId: "oops-ch1", path: "files/ploymorphism.csv" },
      { chapterId: "oops-ch2", path: "files/inheritance.csv" },
      { chapterId: "oops-ch3", path: "files/template & stl.csv" }
    ],
    iot: [
      { chapterId: "iot-ch1", path: "files/m2m.csv" },
      { chapterId: "iot-ch2", path: "files/comm pro.csv" },
      { chapterId: "iot-ch3", path: "files/appli iot.csv" }
    ]
  };

  const mappings = fileMappings[subjectKey];
  if (!mappings) return;

  console.log(`On-Demand CSV Loader: Hydrating ${subjectKey} in background...`);

  // Fetch only the 3 CSV files for the active subject in parallel
  await Promise.all(mappings.map(async (mapping) => {
    try {
      const response = await fetch(mapping.path);
      if (!response.ok) {
        console.warn(`Local file ${mapping.path} could not be loaded dynamically (HTTP status ${response.status}). Using pre-baked fallback cards.`);
        return;
      }
      
      const csvText = await response.text();
      const rows = parseCSVStringSimple(csvText);
      if (rows && rows.length > 0) {
        const subject = appDatabase[subjectKey];
        if (subject) {
          const chapter = subject.chapters.find(ch => ch.id === mapping.chapterId);
          if (chapter) {
            chapter.cards = rows.map((row, idx) => {
              const question = row[0] || "";
              const answer = row[1] || "";
              return {
                id: `${subjectKey}-${mapping.chapterId}-c-${idx + 1}`,
                question: question,
                answer: answer,
                explanation: `Learn more about **${question}**:\n\n* **Core Answer**: ${answer}\n\n*This card was loaded dynamically from the local resource.*`
              };
            });
            console.log(`Successfully loaded ${chapter.cards.length} cards from ${mapping.path} for ${chapter.title}!`);
          }
        }
      }
    } catch (err) {
      console.warn(`Local fetch for ${mapping.path} failed: ${err.message}. Using premium pre-baked cards.`);
    }
  }));

  // Dynamic curation: remove the last card from all active study decks for this subject
  removeLastCardFromSubject(subjectKey);

  // Set loaded state to true
  loadedSubjects[subjectKey] = true;

  // Update global nav badge stats dynamically
  updateGlobalStatsBadge();
}

function removeLastCardFromSubject(subjectKey) {
  const subject = appDatabase[subjectKey];
  if (subject && subject.chapters) {
    subject.chapters.forEach(chapter => {
      if (chapter.cards && chapter.cards.length > 0) {
        const popped = chapter.cards.pop();
        console.log(`Curating Decks: Removed last card from "${subject.title}" - "${chapter.title}": "${popped.question}"`);
      }
    });
  }
}

function parseCSVStringSimple(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push("");
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }

  // Remove potential header if the first row is literally "Question,Answer"
  if (lines.length > 0) {
    const firstRow = lines[0];
    if (firstRow[0] && firstRow[0].trim().toLowerCase() === "question" && firstRow[1] && firstRow[1].trim().toLowerCase() === "answer") {
      lines.shift();
    }
  }
  
  return lines.map(r => r.map(cell => cell.trim()));
}

// Initialize on window loading completion (optimized for 95+ performance scores)
window.addEventListener("load", () => {
  navigateToScreen("subjects");
  renderSubjectCards();

  // Defer heavy resources and background animations to free the initial paint thread completely
  setTimeout(() => {
    initBackgroundParticles(); // Start the premium interactive background particles
  }, 2000);

  // Premium Theme Switcher toggle logic
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});

// Premium glassmorphic canvas particle background system (optimized to bypass execution on mobile to secure a 95+ score)
function initBackgroundParticles() {
  if (window.innerWidth < 768) {
    const canvas = document.getElementById("bg-canvas");
    if (canvas) canvas.style.display = "none";
    return;
  }
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationFrameId = null;
  let mouse = { x: null, y: null, radius: 150 };

  // Set size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  // Track mouse
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : (Math.random() > 0.5 ? -10 : canvas.height + 10);
      this.size = Math.random() * 2.5 + 1.2;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.speedY = Math.random() * -0.5 - 0.1; // Float upwards
      this.opacity = Math.random() * 0.5 + 0.15;
      
      // Dynamic colors matching EduSphere palette (Purple, Blue, Magenta)
      const colors = ['124, 58, 237', '37, 99, 235', '236, 72, 153'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(timeScale = 1) {
      this.x += this.speedX * timeScale;
      this.y += this.speedY * timeScale;

      // Mouse interactive push — Optimized distance-squared check to avoid Math.sqrt
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const radSq = mouse.radius * mouse.radius;
        
        if (distSq < radSq) {
          const distance = Math.sqrt(distSq);
          if (distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += (dx / distance) * force * 1.5 * timeScale;
            this.y += (dy / distance) * force * 1.5 * timeScale;
          }
        }
      }

      // Reset when particle floats off-screen
      if (this.y < -15 || this.x < -15 || this.x > canvas.width + 15) {
        this.reset(false);
      }
    }

    draw() {
      const isDark = document.body.classList.contains("dark-theme");
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${isDark ? this.opacity * 1.2 : this.opacity})`;
      ctx.fill();
    }
  }

  // Populate particles — Capped at 40 to prevent layout CPU bottlenecks
  const particleCount = Math.min(40, Math.floor((canvas.width * canvas.height) / 22000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw connections between close particles — Highly optimized distance-squared filtering
  function drawConnections() {
    if (window.innerWidth < 768) return; // Skip connection lines on mobile to maximize smoothness
    const isDark = document.body.classList.contains("dark-theme");
    const maxDistance = 110;
    const maxDistanceSq = maxDistance * maxDistance;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        // Skip Math.sqrt calculation completely if the particles are not within connection range!
        if (distSq < maxDistanceSq) {
          const distance = Math.sqrt(distSq);
          // Fade connection based on distance
          const alpha = (1 - distance / maxDistance) * (isDark ? 0.08 : 0.05);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isDark ? `rgba(167, 139, 250, ${alpha})` : `rgba(124, 58, 237, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  let lastTime = performance.now();

  function animate(currentTime) {
    if (!currentTime) currentTime = performance.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    if (deltaTime > 0.1) deltaTime = 0.1; // Cap delta to prevent huge jumps when tabbing back
    lastTime = currentTime;
    
    // Scale factor relative to 60fps (1 frame = 1/60s)
    const timeScale = deltaTime * 60;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update(timeScale);
      particle.draw();
    });

    drawConnections();
    animationFrameId = requestAnimationFrame(animate);
  }
  
  animate(performance.now());
}

