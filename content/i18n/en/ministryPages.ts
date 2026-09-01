/**
 * Authoritative English copy for the four remaining ministry child pages —
 * transcribed from the approved Claude Design mockup (Dawn of Light -
 * Ministry Pages.dc.html, sections "01 — Church", "03 — Publishing &
 * Christian Articles", "04 — Education", "05 — Children's Education").
 * Seminary is NOT here: /ministries/seminary already has its own richer,
 * dedicated design (Dawn of Light - Seminary.dc.html) and content file
 * (content/i18n/en/seminary.ts) — Ministry Pages.dc.html's own generic
 * "02 — Seminary" section is explicitly superseded by it and isn't used.
 *
 * Every page follows the same six-slot template (HANDOFF.md §14: masthead,
 * at-a-glance, photograph, what-we-do, one navy detail band, siblings+CTA)
 * but Education's detail band is a stated quote + body paragraph rather
 * than the ruled-row list the other three use — reproduced as drawn, not
 * forced into one shape. Which shape each page's detail band uses is a
 * structural (non-translatable) fact, so it lives in
 * lib/ministries.ts's `ministryDetailBandKind`, not here.
 *
 * Repeated items (facts, activities, related links, detail-band rows) are
 * keyed objects, not arrays — Translated<T> (lib/i18n/types.ts) is a plain
 * mapped type with no special case for array/tuple members, matching every
 * other content file in this project (content/i18n/en/seminary.ts's
 * `subjects`/`facts`, content/i18n/en/about.ts's `ourStory.points`, etc.).
 * Display order for each keyed group is likewise structural, not content —
 * see the `*Keys` arrays in lib/ministries.ts.
 */
export const ministryPages = {
  shared: {
    whatHappensEyebrow: "What happens here",
    activitiesHeading: "Activities",
    relatedHeading: "Related",
    siblingsHeading: "The other ministries",
    viewAllLabel: "All ministries",
  },
  // Shown in every page's "The other ministries" siblings list — the same
  // title/description regardless of which page is doing the listing.
  siblings: {
    church: { title: "Baptist Church", description: "Worship, preaching and the Lord's Table, twice weekly" },
    seminary: {
      title: "Bethlehem Theological Seminary",
      description: "Twice-weekly classes in Scripture, doctrine and pastoral practice",
    },
    publishing: {
      title: "Publishing & Christian Articles",
      description: "Articles, lectures and free books",
    },
    education: {
      title: "Education & community outreach",
      description: "Bringing the light of knowledge to communities facing hardship.",
    },
    childrensEducation: {
      title: "Children's Education",
      description: "Sunday School, free books, and school-fee assistance.",
    },
  },
  church: {
    breadcrumbLabel: "Church",
    eyebrow: "Ministry · Church",
    title: "Baptist Church",
    standfirst:
      "A Baptist congregation that gathers twice a week to worship, hear Scripture preached and receive Holy Communion monthly.",
    facts: {
      gathers: { label: "Gathers", value: "Twice weekly" },
      communion: { label: "Communion", value: "Monthly" },
      cities: { label: "Cities", value: "Karachi · Faisalabad" },
      serviceTimes: { label: "Service times", value: "Sunday 9 AM · Friday 8 PM" },
    },
    photoCaption: "congregation at worship",
    body: {
      heading: "Building the Church Through God’s Word, Worship, and Discipleship",
      /**
       * Restructured from the ARTICLES source document (Article 5 —
       * "Church Ministry"), authoritative over the old single flattened
       * `intro` string this replaces — see lib/ministries.ts's
       * `churchBodyBlocks` for block order/kind (ArticleBody component).
       * Wording is unchanged; only structure is restored.
       */
      blocks: {
        introP1:
          "At Naseri Baptist Church, the heart of our ministry is the proclamation and teaching of God’s Word, the worship of God, spiritual guidance, discipleship, and the building up and strengthening of the Church.",
        introP2:
          "Our desire is to see the Church grow as a community that is firmly grounded in Scripture, mature in faith, spiritually equipped, and prepared to serve Christ. We provide believers with biblical teaching and spiritual training so that they may understand their faith, live it out in their daily lives, and walk faithfully as disciples of Christ.",

        ministryHeading: "Our Church Ministry",
        ministryP1:
          "At Naseri Baptist Church, we serve together to meet the various needs and responsibilities of the Church. Under my leadership and oversight, pastors, elders, deacons, and evangelists are serving in different areas of the Church’s ministry.",
        ministryP2: "Our key areas of ministry include:",

        worshipSub: "Worship",
        worshipP1:
          "Through corporate worship, we provide believers with an opportunity to gather in the presence of God, glorify Him, and be spiritually strengthened through His Word.",
        worshipP2:
          "The focus of our worship is the glory of God, the teaching of Scripture, and the spiritual building up of the congregation in the Christian faith.",

        preachingSub: "Proclaiming and Teaching God’s Word",
        preachingP1: "The proclamation and teaching of God’s Word are foundational to our Church ministry.",
        preachingP2:
          "We seek to faithfully present the truth of Scripture and help believers understand the teaching of the Bible, grow in their faith, and live according to God’s Word.",

        pastoralSub: "Pastoral Ministry and Spiritual Guidance",
        pastoralP1: "We provide spiritual guidance and pastoral care to members of the Church.",
        pastoralP2:
          "Pastors and other responsible ministry leaders guide believers in matters of spiritual life, encourage them through the light of Scripture, and help them move forward faithfully in their Christian walk.",

        discipleshipSub: "Discipleship",
        discipleshipP1:
          "Our focus is not simply on bringing people into the Church, but also on helping them grow and mature as disciples of Christ.",
        discipleshipP2:
          "Through biblical teaching, spiritual training, and participation in the life of the Church, we seek to help believers grow in their relationship with Christ and become equipped to express and live out their Christian faith in everyday life.",

        evangelismSub: "Evangelism",
        evangelismP1: "We also regard sharing the Gospel of Christ with others as an important part of our responsibility as a Church.",
        evangelismP2: "Our desire is for people to hear the Word of God, understand the message of the Gospel, and come to know Jesus Christ.",

        buildingSub: "Building and Strengthening the Church",
        buildingP1:
          "We see the Church as more than simply a gathering of people. We see it as a spiritual community that is grounded in Scripture, strengthened in faith, and equipped for service.",
        buildingP2:
          "For this reason, through teaching, discipleship, spiritual guidance, and various areas of Church ministry, we work to build up and strengthen both individual believers and the congregation as a whole.",

        leadershipHeading: "Ministers and Church Leadership",
        leadershipP1:
          "The ministry of the Church is a shared responsibility. Under my leadership and oversight, pastors, elders, deacons, and evangelists are serving in different areas of responsibility within the Church.",
        leadershipP2:
          "Each servant contributes according to his calling and responsibility to the spiritual life of the Church, its ministry, and the needs of the congregation.",
        leadershipP3:
          "Our desire is for those who serve in the Church to carry out their responsibilities with faithfulness to God’s Word, integrity, responsibility, and Christlike character.",

        familiesHeading: "Spiritual Growth of Families and Children",
        familiesP1: "We consider the spiritual growth of Christian families and children an important part of our Church ministry.",
        familiesP2:
          "We want children and families to become familiar with God’s Word, to be nurtured in the Christian faith, and to embrace biblical values in their daily lives.",
        familiesP3:
          "Our desire is for the Church to provide an environment where families grow stronger in faith and where children experience spiritual growth through God’s Word, Christian education, and participation in the life of the Church.",

        musicHeading: "Music and Choir Ministry",
        musicP1: "Music and choir ministry are also an important part of our Church ministry.",
        musicP2:
          "We seek to strengthen the ministry of music and choirs within the Church through training and guidance, so that music may play a meaningful role in the worship of God, the spiritual life of the congregation, and the building up of the Church.",
        musicP3: "Our aim is for the ministry of music and choir to be carried out on the foundation of Scripture and in keeping with the purpose of Christian worship.",

        since1982Heading: "A Ministry Continuing Since 1982",
        since1982P1: "Our present Church ministry is a continuation of the ministry that began in 1982 through the ministry of Pastor Rehmat Masih.",
        since1982P2:
          "This ministry has been carried forward from one generation to the next. Pastor Rehmat Masih, who was my father, passed away, and following his death, we assumed responsibility for this ministry and its related responsibilities and have continued the work faithfully and responsibly.",
        since1982P3:
          "Today, as we continue this ministry, we serve the Lord through the proclamation and teaching of God’s Word, worship, spiritual guidance, discipleship, evangelism, the building and strengthening of the Church, and various other areas of Church ministry.",

        desireHeading: "Our Desire",
        desireIntro: "Our desire is for Naseri Baptist Church to be a Church that:",
        desireItem1: "Is firmly grounded in the Word of God.",
        desireItem2: "Glorifies God through worship.",
        desireItem3: "Nurtures the spiritual growth of believers in the faith.",
        desireItem4: "Makes faithful disciples of Christ.",
        desireItem5: "Proclaims the Gospel to others.",
        desireItem6: "Provides spiritual nurture and guidance to families and children.",
        desireItem7: "Equips ministers and Church leaders for faithful service.",
        desireItem8: "Strengthens music and choir ministry on a biblical foundation.",
        desireItem9: "And faithfully carries the message and ministry of Christ forward to future generations.",

        commitmentHeading: "Our Commitment",
        commitmentP1:
          "From the ministry that began in 1982 until today, our fundamental desire has remained the same: to remain faithful to the Word of God, strengthen the Church, help believers grow spiritually, and continue proclaiming the Gospel of the Lord Jesus Christ.",
        commitmentP2:
          "We are committed to building up the Church and preparing future generations through the faithful proclamation of God’s Word, faithful worship, discipleship, spiritual training, and Christ-centered service expressed through love.",
      },
      activities: {
        worship: "Worship services, twice weekly",
        preaching: "Preaching and teaching from Scripture",
        communion: "Holy Communion, monthly",
        baptism: "Baptism in the name of the Father, the Son and the Holy Spirit",
        prayer: "Prayer for the congregation and those who write in",
      },
    },
    rail: {
      practicalHeading: "Plan a visit",
      practicalBody:
        "Visitors are warmly welcomed at any service. Service times and locations are currently being confirmed — please call or message us for details.",
      primaryCta: "Directions & contact",
      secondaryCta: "WhatsApp +92 344 2316634",
      related: {
        statementOfFaith: "Statement of faith",
        sermons: "Sermons",
        prayer: "Request prayer",
      },
    },
    detailBand: {
      eyebrow: "Weekly Schedule",
      rows: {
        worshipService: { label: "Worship Service", value: "Sunday 9 AM" },
        secondService: { label: "Midweek Service", value: "Friday 8 PM" },
        sundaySchool: { label: "Sunday School", value: "Sunday School weekly" },
        communion: { label: "Holy Communion", value: "Once a month" },
        seminaryClasses: { label: "Seminary Classes", value: "Twice a week" },
      },
    },
    cta: {
      heading: "Come and Worship with us",
      body: "Ask about service times in Karachi or Faisalabad, or send a prayer request to the pastor.",
      primaryLabel: "Contact the ministry",
      secondaryLabel: "Request prayer",
    },
  },
  publishing: {
    breadcrumbLabel: "Publishing & Christian Articles",
    eyebrow: "Ministry · Publishing",
    title: "Publishing & Christian Literature",
    standfirst:
      "This ministry is dedicated to Helping people study, understand, and live by Scripture through in-depth articles, theological lectures, and free book distribution.",
    facts: {
      output: { label: "Output", value: "Articles · Books · Lectures" },
      books: { label: "RESOURCES", value: " Free Educational Materials" },
      languages: { label: "LANGUAGES", value: "Urdu · English" },
      titlesInPrint: { label: "PUBLICATIONS", value: "Active Manuscripts & Books" },
    },
    photoCaption: "printed material and books",
    body: {
      heading: "Writing to Make the Truth of God's Word Known",
      /**
       * Restructured from the ARTICLES source document (Article 8 —
       * "Writing to Make the Truth of God's Word Known"), authoritative
       * over the old single flattened `intro` string this replaces — see
       * lib/ministries.ts's `publishingBodyBlocks` for block order/kind
       * (ArticleBody component). Wording is unchanged; only structure is
       * restored.
       */
      blocks: {
        introP1: "My journey of writing began on 17 August 2016, but the desire behind that writing began even earlier.",
        introP2:
          "My writing ministry grew out of conversations and discussions with non-Christian people, particularly through Facebook. From the beginning, I did not want to use social media merely for photographs, entertainment, or personal enjoyment. I wanted to use it as a means of proclaiming God's Word and engaging people with the truth of Scripture.",
        introP3:
          "At first, these interactions took the form of simple conversations and discussions. But as those conversations continued, I increasingly recognized the need for careful, written responses—responses that could explain biblical truth clearly, address questions thoughtfully, and allow people to consider the message of Scripture beyond a momentary conversation.",
        introP4: "That realization led me to begin writing seriously on 17 August 2016.",

        convHeading: "From Conversations to a Writing Ministry",
        convP1: "What began with conversations gradually became a ministry of writing.",
        convP2: "Over the years, I have written extensively in several areas, particularly:",
        convItem1: "Biblical Articles",
        convItem2: "Theological Articles",
        convItem3: "Christian Education",
        convItem4: "Biblical Questions and Answers",
        convP3:
          "Through these writings, I seek to address questions about Scripture, explain biblical teachings, engage theological subjects, and provide thoughtful answers to questions raised by both Christians and non-Christians.",
        convP4: "The purpose has never been simply to write more articles.",
        convP5: "The purpose is to make the truth of God's Word known.",
        convP6:
          "I want my writing to help people understand Scripture more clearly, think seriously about the Christian faith, and encounter the truth of God's Word with greater understanding.",

        booksHeading: "When Articles Became Books",
        booksP1: "As the writing continued, the desire to study, explain, and teach gradually developed into something more: books.",
        booksP2:
          "Some of my writings are already available online, including articles published through internet platforms and social media. Some works have also been made available to readers in PDF format, while several books are currently being developed for future publication in printed form.",
        booksP3:
          "Among the works I have written is “A Study of 1,050 Commands in the New Testament,” while another major work, “The Canon of Scripture,” is currently under development. Other books and projects are also in progress.",
        booksP4:
          "If the Lord provides the opportunity, resources, and strength, I hope to see these works published and made available to a wider audience so that more people can study, learn, and grow in their understanding of Scripture.",

        educationHeading: "Writing as Christian Education",
        educationP1: "Writing has also become an important part of our broader educational ministry.",
        educationP2: "Alongside articles and books, educational materials and structured study curricula have been developed to help people learn in a more systematic way.",
        educationP3: "The same desire that led me to write articles has continued to shape this educational work:",
        educationP4: "to make biblical truth understandable, accessible, and available to people who sincerely desire to learn.",
        educationP5:
          "Whether someone encounters the material through an article, a book, a course, a lecture, or an online learning platform, the purpose remains the same—to point people toward the truth of God's Word.",

        beyondHeading: "Beyond the Written Page",
        beyondP1: "This ministry of communication has not been limited to written articles.",
        beyondP2: "For several years, I have also used audio platforms to make biblical and theological material accessible to people who may prefer listening rather than reading.",
        beyondP3: "One of these efforts has been through a channel known as Darwaza Dar-e-Hayat, where a number of articles and biblical studies have also been presented in audio form.",
        beyondP4: "The goal has always been to use whatever responsible means are available to communicate God's Word.",
        beyondP5: "Today, that includes:",
        beyondItem1: "Websites.",
        beyondItem2: "Social media.",
        beyondItem3: "Facebook.",
        beyondItem4: "WhatsApp-based theological education.",
        beyondItem5: "Audio content.",
        beyondItem6: "Books and PDFs.",
        beyondItem7: "Articles and educational materials.",
        beyondP6: "Every platform provides another opportunity for the message of Scripture to reach someone who may otherwise never encounter it.",

        voiceHeading: "A Voice That Can Travel Further",
        voiceP1: "One of the great opportunities of our generation is that a written article can travel far beyond the person who originally wrote it.",
        voiceP2: "A conversation may reach one person.",
        voiceP3: "An article can reach hundreds.",
        voiceP4: "A book can continue teaching long after its author has finished writing it.",
        voiceP5: "And a digital resource can cross geographical boundaries and reach people in places that may otherwise be difficult to reach.",
        voiceP6: "For this reason, I see writing not merely as a personal interest, but as a ministry of teaching and witness.",
        voiceP7: "The goal is not recognition for the writer.",
        voiceP8: "The goal is that God's name may receive honor and glory, and that the light of biblical truth may reach people wherever they are.",

        purposeHeading: "Our Purpose",
        purposeP1: "The purpose behind every article, every book, every lesson, and every educational resource is ultimately the same:",
        purposeP2:
          "To proclaim the truth of God's Word, to defend its faithfulness and authority, to provide biblical and theological education, and to help people understand and live according to Scripture.",
        purposeP3:
          "Whether the message reaches someone through a website, a social media page, an article, a book, an audio recording, or our WhatsApp-based theological education, we are grateful for every opportunity God provides to make His Word known.",
        purposeP4: "We believe that the means may change, but the calling remains the same.",
        purposeP5: "The message is God's Word.",
        purposeP6: "The purpose is faithful teaching.",
        purposeP7: "The desire is transformed lives.",
        purposeP8: "And the glory belongs to God.",

        journeyHeading: "The Journey Continues",
        journeyP1: "What began on 17 August 2016 as a response to conversations on Facebook has grown into an ongoing ministry of writing, teaching, research, and Christian education.",
        journeyP2: "The journey is still continuing.",
        journeyP3: "There are more questions to answer, more subjects to study, more articles to write, more educational materials to develop, and more books waiting to be completed.",
        journeyP4: "My prayer is that every word written and every resource produced will serve a greater purpose than simply adding another publication to the world.",
        journeyP5: "May every article open a door to Scripture.",
        journeyP6: "May every book encourage deeper study.",
        journeyP7: "May every answer lead someone closer to truth.",
        journeyP8: "And may every opportunity to teach ultimately bring honor and glory to the Lord.",
        journeyP9: "This is why we write.",
        journeyP10: "Not simply to be heard, but to make the truth of God's Word known.",
      },
      activities: {
        writing: "Writing Christian Articles",
        lectures: "Educational Lectures",
        books: "Free Book Distribution",
        material: "Christian Educational Resources for Congregations and Students",
      },
    },
    rail: {
      practicalHeading: "Explore Our Publications",
      practicalBody: "Discover a collection of articles and studies in our library, available to read and download for free.",
      primaryCta: "Browse Articles",
      secondaryCta: "Request a Printed Book",
      related: {
        resourcesLibrary: "Resource Library",
        bibleStudies: "Bible Studies",
        seminary: "Seminary",
      },
    },
    detailBand: {
      eyebrow: "Recently published",
      rows: {
        article: { label: "[Article title — to be supplied]", value: "Article · [date]" },
        book: { label: "[Book title — to be supplied]", value: "Book · اردو" },
        bibleStudy: { label: "[Bible study — to be supplied]", value: "Study · PDF" },
      },
    },
    cta: {
      heading: "Request Printed Materials",
      body: "Books and study materials are provided completely free of charge. Please inform the ministry of your specific requirements and shipping location.",
      primaryLabel: "Contact the Ministry",
      secondaryLabel: "Browse the Library",
    },
  },
  education: {
    breadcrumbLabel: "Education",
    eyebrow: "Ministry · Education",
    title: "Education & Community Outreach",
    standfirst: "Bringing the light of knowledge to communities facing hardship, and teaching sustainable methods to empower individuals to improve their circumstances.",
    facts: {
      approach: { label: "Approach", value: "Empowerment through education, rather than mere handouts." },
      cities: { label: "Cities", value: "Karachi • Faisalabad" },
      programmesAndReach: { label: "Programmes & Reach", value: "6 Active Ministry Programmes" },
    },
    photoCaption: "teaching in a community setting",
    body: {
      heading: "Taking Education Where It Is Needed Most",
      /**
       * Restructured from the ARTICLES source document (Article 10 —
       * "Educational Outreach"), authoritative over the old single
       * flattened `intro` string this replaces — see lib/ministries.ts's
       * `educationBodyBlocks` for block order/kind (ArticleBody
       * component). Wording is unchanged; only structure is restored.
       */
      blocks: {
        introP1: "Education can change the direction of a child's life, but for many children in Pakistan, the opportunity to receive a meaningful education remains beyond their reach.",
        introP2: "Our Educational Outreach ministry exists to reach children and families in communities where poverty, limited educational opportunities, inadequate schooling, and economic pressure prevent children from receiving the education they need.",
        introP3: "We believe that education should not be a privilege available only to families who can afford it. Every child deserves the opportunity to learn, develop their abilities, and build a future with dignity.",

        reachHeading: "Reaching Communities Beyond the Classroom",
        reachP1: "Our work begins by going into communities and building relationships with families.",
        reachP2:
          "In many poor villages and small Christian communities, children become part of the household's struggle for survival at an early age. Some parents depend upon the income their children can earn, while others have limited access to schools that can provide a good standard of education.",
        reachP3: "For this reason, educational outreach is not simply a matter of paying school fees.",
        reachP4: "The first step is often reaching the family itself.",
        reachP5: "We meet parents, listen to their circumstances, explain the importance of education, and encourage them to allow their children to remain in school.",
        reachP6: "We also speak with children themselves, helping them understand that their present circumstances do not have to determine their future.",

        findingHeading: "Finding Children Who Are Being Left Behind",
        findingP1: "Our outreach often begins through personal contact within communities.",
        findingP2: "In Karachi, Faisalabad, and other areas where we have opportunities to serve, we seek to meet families whose children are struggling to remain connected to education.",
        findingP3:
          "Sometimes this begins by meeting children in streets, neighborhoods, and local communities. Through these relationships, we are able to reach their families, understand their circumstances, and explore practical ways of helping their children return to or remain in school.",
        findingP4: "This work requires patience.",
        findingP5: "It requires repeated conversations.",
        findingP6: "It requires trust.",
        findingP7: "And often, it requires helping an entire family understand why sacrificing a child's immediate income for the sake of education can lead to a better future.",

        dependencyHeading: "Education, Not Dependency",
        dependencyP1: "Our goal is not to create permanent dependence upon financial assistance.",
        dependencyP2: "We want educational support to become a pathway toward knowledge, skills, dignity, and self-reliance.",
        dependencyP3: "When a child receives an education, that child gains more than a school certificate. Education can provide knowledge, confidence, practical opportunities, and the ability to contribute meaningfully to family and society.",
        dependencyP4: "This is why our long-term approach is not simply to provide short-term assistance, but to help children remain in education and prepare for a future in which they can become productive and responsible members of society.",

        practicalHeading: "Practical Educational Support",
        practicalIntro: "Where resources and circumstances permit, our outreach ministry may provide practical assistance such as:",
        practicalItem1: "School fees",
        practicalItem2: "Books and textbooks",
        practicalItem3: "School uniforms",
        practicalItem4: "Educational materials",
        practicalItem5: "Assistance with school or college admission",
        practicalItem6: "Family visits",
        practicalItem7: "Counseling for parents and children",
        practicalItem8: "Follow-up regarding school attendance and educational progress",
        practicalP1: "Our present educational support has included approximately 30 children at different times, although the number changes according to available resources, family circumstances, and whether children remain in school.",
        practicalP2: "The monthly educational expenditure has generally ranged from approximately PKR 30,000 to PKR 50,000, depending on the number of children receiving assistance and their individual needs.",

        visitingHeading: "Visiting Families and Walking Alongside Them",
        visitingP1: "Educational outreach is most meaningful when it involves personal involvement.",
        visitingP2: "During recent visits to Faisalabad, several families were personally visited. Their children were encouraged to continue their education, and assistance was provided with books and school requirements. School fees were also supported where possible.",
        visitingP3: "In one case, a young woman who wanted to continue to college was assisted with her admission and educational expenses.",
        visitingP4: "These encounters remind us that educational ministry is not simply about numbers.",
        visitingP5: "Behind every number is a child. Behind every child is a family. And behind every family is a story that deserves to be heard.",

        childLaborHeading: "Facing the Challenge of Child Labor",
        childLaborP1: "One of the greatest challenges we encounter is the pressure of poverty.",
        childLaborP2: "In some families, children work because their parents depend upon their income to meet basic household needs. Convincing parents to allow a child to leave work and return to school can therefore be extremely difficult.",
        childLaborP3: "This is why our outreach includes counseling and relationship-building with both parents and children.",
        childLaborP4: "We want families to see that education is not a luxury. It is an investment in the child's future.",
        childLaborP5: "We want children to have books in their hands rather than tools of labor, and classrooms rather than a childhood defined by economic hardship.",

        betterSystemHeading: "Building a Better System",
        betterSystemP1: "We recognize that our current resources are limited and that educational outreach presents significant logistical challenges, particularly when families are spread across different cities and communities.",
        betterSystemP2: "There are times when contact with a family is lost, a child leaves school, or financial assistance cannot be continued.",
        betterSystemP3: "These realities have shown us the importance of developing a more organized system for the future.",
        betterSystemP4: "We are working toward a model in which children's information, educational progress, school attendance, family circumstances, and assistance can be followed more systematically.",
        betterSystemP5: "Our desire is to develop an educational outreach ministry that is more accountable, sustainable, and capable of serving a growing number of children.",

        allPakistanHeading: "From Karachi and Faisalabad to All of Pakistan",
        allPakistanP1: "At present, much of our practical work is connected with communities in Karachi and Faisalabad, but our vision extends far beyond these two cities.",
        allPakistanP2: "We desire to reach children throughout Pakistan who are being deprived of education because of poverty, family circumstances, or lack of opportunity.",
        allPakistanP3: "Our long-term vision is to reach thousands and ultimately many more children, helping them remain in school, gain knowledge, develop skills, and build sustainable futures.",
        allPakistanP4: "We especially want to reach children who are at risk of becoming trapped in cycles of poverty and child labor.",

        futureHeading: "A Future of Opportunity",
        futureP1: "Our vision is not simply to help children survive their circumstances.",
        futureP2: "We want to help them rise beyond those circumstances.",
        futureP3: "We want to see children become educated, responsible, skilled, and confident.",
        futureP4: "We want Christian young people to develop entrepreneurial thinking and eventually establish their own livelihoods and businesses so that they can support their families and contribute to society rather than remaining dependent upon others.",
        futureP5: "We also desire to contribute to a society in which children from poor families can receive meaningful educational opportunities alongside children from more privileged backgrounds.",

        whyMattersHeading: "Why Educational Outreach Matters",
        whyMattersP1: "A school fee may appear to be a small contribution.",
        whyMattersP2: "A book may seem like a simple gift.",
        whyMattersP3: "A uniform may appear to be an ordinary necessity.",
        whyMattersP4: "But for a child who might otherwise leave school, each of these can represent a doorway to a different future.",
        whyMattersP5: "A book can open a mind.",
        whyMattersP6: "An education can open a door.",
        whyMattersP7: "An opportunity can change a life.",
        whyMattersP8: "This is why we continue this work.",

        joinUsHeading: "Join Us in Taking Education Further",
        joinUsP1: "Educational Outreach is still developing.",
        joinUsP2: "We are visiting families, counseling parents, encouraging children, providing educational assistance where possible, and seeking better ways to reach those who are most in need.",
        joinUsP3: "But we cannot do this work alone.",
        joinUsP4: "We need people who believe that children deserve an opportunity.",
        joinUsP5: "We need churches, families, friends, and partners who will stand with us.",
        joinUsP6: "And above all, we need prayer.",
        joinUsP7: "Your prayer can strengthen this ministry.",
        joinUsP8: "Your support can help a child remain in school.",
        joinUsP9: "Your partnership can help turn an opportunity into a future.",
        joinUsP10: "Our desire is simple:",
        joinUsP11: "To take education where it is needed most, to help children remain in school, to break cycles of poverty, and to help build a generation capable of living and serving with dignity.",
        joinUsP12: "Because when we invest in a child's education, we are not simply changing one child's future—we are helping shape the future of families, communities, and the nation.",
      },
      activities: {
        education: "Christian education for adults and young people",
        teaching: "Teaching practical, sustainable ways to improve circumstances",
        lectures: "Lectures in communities and congregations",
        material: "Distribution of free educational material",
      },
    },
    rail: {
      practicalHeading: "Work With Us",
      practicalBody: "If your community or congregation would like our ministry to provide educational sessions, please contact the pastor.",
      primaryCta: "Invite the Ministry",
      secondaryCta: "Support This Work",
      related: {
        childrensEducation: "Children's Education",
        missionAndVision: "Mission & Vision",
        supportTheMission: "Support the Mission",
      },
    },
    detailBand: {
      eyebrow: "The Vision, Stated Plainly",
      quote: "Educated Children Contributing to the Advancement of the Nation.",
      quoteBody: "Teaching a sustainable way forward is treated as an integral part of the ministry's work, rather than a separate charity programme.",
    },
    cta: {
      heading: "Stand Behind Our Teaching",
      body: "Your support directly funds teaching, books, and school fees. Donation methods will be published once the organization's payment arrangements have been approved.",
      primaryLabel: "How You Can Help",
    },
  },
  childrensEducation: {
    breadcrumbLabel: "Children's Education",
    eyebrow: "Ministry · Children",
    title: "Let the Children Come",
    standfirst: "Sunday School each week, free books, school uniforms, and help with school fees so that a child stays in school.",
    facts: {
      sundaySchool: { label: "Sunday School", value: "Weekly" },
      books: { label: "Books", value: "Free" },
      schoolFees: { label: "School fees", value: "Assistance given" },
      childrenSupported: { label: "Children supported", value: "Approximately 30" },
    },
    photoCaption: "classroom or Sunday School",
    photoSecondaryCaption: "no identifiable child published without written permission",
    body: {
      heading: "Giving Children a Chance to Learn, Grow, and Build a Better Future",
      /**
       * Restructured from the ARTICLES source document (Article 7 —
       * "Children's Education"), authoritative over the old single
       * flattened `intro` string this replaces — see lib/ministries.ts's
       * `childrensEducationBodyBlocks` for block order/kind (ArticleBody
       * component). Wording is unchanged; only structure is restored.
       */
      blocks: {
        introP1: "For us, children’s education is not simply about paying a school fee. It is about changing the direction of a child’s life.",
        introP2:
          "In many poor Christian communities across Pakistan, children become an essential source of income for their families at a very young age. Instead of spending their childhood in school, learning, reading, and preparing for their future, many are expected to work alongside their parents and contribute to the household income.",
        introP3:
          "For a family living in poverty, sending a child to school can seem like an impossible decision. When a child earns money, that income may help provide food for the family today. But when that child leaves school, an opportunity for a better future may disappear tomorrow.",

        step1Heading: "Our First Step: Convincing the Family",
        step1P1: "One of the greatest challenges we face is not simply finding a school or paying a fee. It is helping parents understand why their child’s education matters.",
        step1P2: "We meet families, listen to their circumstances, speak with parents, counsel them, and encourage them to allow their children to remain in school.",
        step1P3: "We also speak with children themselves, helping them understand the value of education and encouraging them not to give up on their future.",
        step1P4:
          "This is often a difficult and gradual process. Some parents depend upon the income their children earn, and asking a family to give up that income can place a real burden on the household. For this reason, our work requires patience, relationship, follow-up, and continued encouragement.",

        findingHeading: "Finding Children Who Need Help",
        findingP1: "Our work often begins within communities themselves.",
        findingP2:
          "In Karachi and Faisalabad, we seek to meet families and children who are struggling with poverty and limited educational opportunities. Sometimes this begins simply by meeting children in streets and neighborhoods, building a relationship with them, and then reaching their families.",
        findingP3: "We visit families, listen to their needs, and where possible help them take practical steps toward keeping their children in school.",
        findingP4:
          "During a recent visit to Faisalabad, several families were visited personally. Their children were encouraged to continue their education, and practical assistance was provided through school books, educational materials, uniforms, and school fees. In one case, we were also able to help a young woman who wanted to continue to college by assisting with her admission and educational expenses.",
        findingP5: "These are not merely financial transactions to us. Every child represents a life, a future, and an opportunity.",

        moreThanHeading: "More Than Financial Assistance",
        moreThanP1: "We have learned through years of ministry that simply sending money is not always enough.",
        moreThanP2:
          "In some cases, when school fees are sent directly to a family, circumstances can cause the child to leave school and the money intended for education may instead be used for immediate household needs.",
        moreThanP3:
          "This is why we want to develop a more organized and accountable system of educational support—one that allows us to maintain better records, follow children's progress, communicate regularly with families, and ensure that educational assistance is actually reaching its intended purpose.",
        moreThanP4:
          "Our desire is not merely to provide temporary financial relief. We want to help children remain in school, complete their education, develop their abilities, and gain opportunities that can change the future of their families.",

        provideHeading: "What We Provide",
        provideIntro: "According to available resources and individual needs, our Church ministry has provided children with:",
        provideItem1: "School fees",
        provideItem2: "Books and textbooks",
        provideItem3: "School uniforms",
        provideItem4: "Educational materials",
        provideItem5: "Assistance with school or college admission",
        provideItem6: "Family visits and counseling",
        provideItem7: "Encouragement and follow-up regarding education",
        provideP1:
          "At present, the number of children receiving assistance can vary according to circumstances and available resources. At one stage, approximately 30 children were receiving support for school fees, uniforms, and books through our Church ministry.",
        provideP2:
          "The monthly educational expenditure has generally ranged between approximately PKR 30,000 and PKR 50,000, depending on the number of children and their individual educational needs.",

        notForProfitHeading: "Our Goal Is Not to Build a School for Profit",
        notForProfitP1: "Our desire is not simply to establish a private school where children are charged fees or where the ministry generates income.",
        notForProfitP2: "Our desire is different:",
        notForProfitItem1: "We want education to reach children who are otherwise being left behind.",
        notForProfitItem2:
          "We want children from poor families to have an opportunity to receive an education, develop their abilities, and build a future with dignity.",
        notForProfitItem3: "We want children to have books in their hands instead of tools of labor.",
        notForProfitItem4: "We want them to have a classroom instead of a life defined by poverty.",
        notForProfitItem5: "We want them to have the opportunity to learn instead of being forced to earn before they are ready.",
        notForProfitItem6:
          "And we want Christian children, in particular, to grow in both their education and their faith, so that they can become responsible, skilled, and productive members of society.",

        visionHeading: "A Long-Term Vision",
        visionP1:
          "We recognize that our present resources are limited. The number of children we are able to support may increase or decrease depending on available funding and circumstances. We also recognize that some children lose contact with us or leave school despite our efforts.",
        visionP2: "For this reason, we are working toward a more structured educational ministry with better records, stronger family follow-up, and a more sustainable system of support.",
        visionP3: "Our long-term desire is to reach far beyond the children we are currently able to support.",
        visionP4: "We want to see thousands, and ultimately many more, children across Pakistan given an opportunity to remain in school and build a better future.",
        visionP5: "We especially want to reach children in poor communities who are at risk of leaving school and entering labor at an early age.",

        whySupportHeading: "Why Your Support Matters",
        whySupportP1: "This work cannot be accomplished by one person alone.",
        whySupportP2: "It requires prayer.",
        whySupportP3: "It requires people who believe that every child has value.",
        whySupportP4: "It requires families and churches willing to stand with children.",
        whySupportP5: "And it requires faithful financial support to turn educational opportunities into reality.",
        whySupportP6: "When you help a child remain in school, you are not simply paying a fee.",
        whySupportP7: "You are helping protect a future.",
        whySupportP8: "When you provide a book, you are placing knowledge into a child's hands.",
        whySupportP9: "When you help with a uniform, you are helping a child walk into a classroom with dignity.",
        whySupportP10: "When you support a child's education, you are helping break a cycle in which poverty determines the future of the next generation.",
        whySupportP11:
          "Our prayer is that, through education, biblical values, practical skills, and opportunity, children and young people will grow into responsible adults who can contribute positively to their families, communities, and nation.",
        whySupportP12: "We believe that a child should not be defined by the poverty into which he or she was born.",
        whySupportP13: "A child's circumstances may shape the beginning of their story—but they do not have to determine its ending.",

        joinUsHeading: "Join Us in Building a Brighter Future",
        joinUsP1:
          "Our educational ministry is still growing. We are learning, developing better systems, visiting families, counseling parents, supporting children, and seeking new ways to make education accessible to those who need it most.",
        joinUsP2: "We invite you to become part of this work.",
        joinUsP3: "Pray for these children.",
        joinUsP4: "Stand with their families.",
        joinUsP5: "Support their education.",
        joinUsP6: "Help us build a future in which children can learn, grow, work with dignity, and become a blessing to their communities.",
        joinUsP7:
          "Together, we can help put a book in a child's hands, open the door to a classroom, and give the next generation a greater opportunity to build a brighter future.",
        joinUsP8: "Because education is more than an expense.",
        joinUsP9: "It is an investment in a life.",
        joinUsP10: "And every child is worth investing in.",
      },
      activities: {
        sundaySchool: "Weekly Sunday School Classes",
        books: "Free Books and Educational Resources for Families",
        fees: "Financial Assistance for School Fees",
        teaching: "Christian Education and Spiritual Training for Children",
      },
    },
    rail: {
      practicalHeading: "For parents",
      practicalBody: "Ask about Sunday School times, books, or help with fees. Enquiries are handled by the pastor directly.",
      primaryCta: "Contact the ministry",
      secondaryCta: "WhatsApp +92 344 2316634",
      photoPolicyHeading: "Photograph policy",
      photoPolicyBody:
        "No identifiable child appears on this website without written permission from a parent or guardian. Where permission is absent, the page uses a placeholder or shows children from behind.",
      related: {
        educationAndOutreach: "Education & outreach",
        church: "Church",
        supportTheMission: "Support the mission",
      },
    },
    detailBand: {
      eyebrow: "What support pays for",
      rows: {
        schoolFees: { label: "School Fees for One Child (Per Term):", value: "Rs. 5,000" },
        materials: { label: "Books and Educational Materials:", value: "Rs. 2,500" },
        sundaySchoolMaterial: { label: "Sunday School Teaching Resources:", value: "Rs. 1,500" },
      },
    },
    cta: {
      heading: "Help a Child Stay in School",
      body: "Online donation methods will be displayed here once our organization's payment arrangements are fully approved. In the meantime, please contact our ministry directly to make a contribution or pledge your support.",
      primaryLabel: "How You Can Help",
      secondaryLabel: "Contact Our Ministry",
    },
  },
} as const;

export type MinistryPagesStrings = typeof ministryPages;
export type MinistryPageKey = "church" | "publishing" | "education" | "childrensEducation";
export type MinistrySiblingKey = MinistryPageKey | "seminary";
