/**
 * Authoritative English About-page copy. PRD.md §8's own instruction
 * governs two sections here: "Our Story" presents only the supplied
 * history bullet points (education completed in 1997 · difficult
 * circumstances in Pakistan during that period · seminary education ·
 * extensive work with Scripture · ministry among non-Christian
 * communities · continuing ministry activity) without inventing
 * chronology or narrative connective tissue between them, because "the
 * supplied history is personal and partially ambiguous in chronology" and
 * needs organizational review before final wording; "Leadership" states
 * plainly "Do not invent biographies" — both roles ship as placeholders
 * per HANDOFF.md §25 items 5–6.
 */
export const about = {
  metadata: {
    title: "About — Dawn of Light Ministry",
    description:
      "Dawn of Light Ministry — a Baptist church, seminary and educational mission (Baptist Church, Seminary & Educational Mission) serving Karachi and Faisalabad, Pakistan since 1982. Our story, mission, statement of faith and leadership.",
  },
  masthead: {
    eyebrow: "About",
    title: "A Baptist church, seminary and educational mission, since 1982.",
    standfirst:
      "Dawn of Light Ministry — Baptist Church, Seminary & Educational Mission — serves Karachi and Faisalabad: preaching God's Word among Christians and non-Christians, training students at Bethlehem Theological Seminary, and helping Christian children receive an education.",
  },
  rail: {
    label: "On this page",
    ourStory: "Our story",
    missionVision: "Mission & vision",
    statementOfFaith: "Statement of faith",
    leadership: "Leadership",
    missionVisionMobile: "Mission",
    statementOfFaithMobile: "Faith",
  },
  ourStory: {
    eyebrow: "Our story",
    heading: "Our story",
    /**
     * Restructured from the ARTICLES source document (Article 1 — "Our
     * Story"), authoritative over the old single flattened `standfirst`
     * template string this replaces — see lib/about.ts's `ourStoryBlocks`
     * for block order/kind (ArticleBody component). Wording is unchanged;
     * only structure is restored.
     */
    blocks: {
      dek: "A Faithful Journey That Began in 1982 and Continues Today",
      leadP1:
        "Our story is more than the story of a church or a family. It is a testimony of God’s grace, faithfulness, and the enduring commitment to His Word—a journey of faith that has been passed from one generation to the next.",

      beginningHeading: "The Beginning of Our Journey",
      beginningP1:
        "Our journey began in 1982, when my father, Pastor Rehmat Masih, completed his Bible seminary education in Sheikhupura, Punjab. The very next day after completing his studies, an American missionary named Coleman invited him to come to Karachi and serve the Lord by proclaiming His Word in this great city.",
      beginningP2:
        "At that time, Karachi was one of Pakistan’s major cities and was widely regarded as the country’s commercial heart. My father came to Karachi with a clear calling: to serve God faithfully and devote his life to the ministry of His Word and the building of His Church.",
      beginningP3: "The road was not always easy. Yet he continued his ministry with faithfulness, perseverance, humility, and dedication, trusting God through every circumstance.",
      beginningP4:
        "During those years, a number of missionaries came to Pakistan and worked alongside my father in proclaiming the Gospel and serving the Church in different regions and provinces of the country. The names and stories of those who shared in this ministry are many, and the full account would be a long one. But the heart of the story can be expressed simply:",
      beginningP5: "Pastor Rehmat Masih remained faithful to the Lord, faithfully served His Word, and ultimately fell asleep in Christ after a lifetime of faith and ministry.",
      beginningP6: "His life left us more than a cherished memory. It left us a sacred responsibility: to faithfully carry forward the faith that had been entrusted to us and to continue serving the Lord and His people.",

      chapterHeading: "A New Chapter Begins",
      chapterP1: "When I, Pastor Nayyer Gull, completed my seminary education in 2005, the circumstances surrounding the Church were far from easy.",
      chapterP2:
        "Karachi was passing through a deeply difficult period. Fear had become part of everyday life, the political situation in Pakistan was unstable, and many people were uncertain about what the future would bring.",
      chapterP3: "Yet it was in the midst of these very circumstances that the Lord had already strengthened my faith.",
      chapterP4: "One passage from Scripture had become deeply rooted in my heart. In Romans 8:35–37, the Apostle Paul asks:",
      chapterP5:
        "“Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? … Yet in all these things we are more than conquerors through Him who loved us.”",
      chapterP6: "These words became more than a passage of Scripture to me. They became a conviction at the very heart of my faith.",
      chapterP7:
        "I came to understand that the foundation of the Church cannot depend upon changing circumstances, political conditions, or the absence of difficulties. Its true foundation must always be Jesus Christ and His Word.",
      chapterP8:
        "Therefore, even in an atmosphere of fear and uncertainty, we continued to serve. We sought to establish and strengthen the Church upon a firm foundation and remained committed to keeping the Word of God at the center of our ministry.",

      notAloneHeading: "We Were Not Alone",
      notAloneP1: "Throughout this journey, God never left us alone.",
      notAloneP2:
        "He graciously brought faithful families into our lives who stood with us. He gave us disciples who continued to grow in faith. He provided faithful friends, fellow servants, and brothers and sisters in Christ who remained beside us, especially during difficult seasons.",
      notAloneP3: "Together, we prayed.",
      notAloneP4: "Together, we served.",
      notAloneP5: "Together, we faced challenges.",
      notAloneP6: "And together, by the grace of God, we continued the work of the ministry.",
      notAloneP7:
        "Over the years, the Lord has enabled us to establish a distinctive presence in the ministry of the Church in Karachi and beyond, grounded in the Word of God, faith, discipleship, and faithful service.",
      notAloneP8: "This journey has not ended.",
      notAloneP9: "The light that was kindled in 1982 continues to shine by the grace of God.",
      notAloneP10: "Today, we remain actively engaged in teaching the Word of God, strengthening the Church, making disciples, providing training, educating children, and proclaiming the Gospel.",
      notAloneP11: "Our purpose is not simply to remember the past. Our desire is to faithfully carry the heritage of faith entrusted to us and pass it on to the next generation.",
      notAloneP12: "We move forward with the conviction that the Word of God is living and powerful, and that no work faithfully carried out in Christ is ever without purpose.",

      legacyHeading: "A Legacy That Continues",
      legacyP1: "What began with one servant of God in 1982 has become a continuing journey of faith, service, and commitment to the Gospel.",
      legacyP2:
        "The ministry we have received is not something we regard merely as a family legacy. We understand it as a responsibility entrusted to us by God—to remain faithful to His Word, to serve His Church, to disciple others, and to prepare the next generation to know and follow Christ.",
      legacyP3: "We are deeply grateful for every person whom God has brought alongside us throughout this journey.",
      legacyP4: "Every prayer, every act of service, every word of encouragement, and every faithful partnership has been part of this story.",
      legacyP5: "And while we look with gratitude upon what God has done, we also look ahead with faith toward what He is still doing.",
      legacyP6: "The story continues.",

      journeyHeading: "Be Part of the Journey",
      journeyP1: "Our story is not yet complete.",
      journeyP2: "We desire to continue this journey of prayer, ministry, teaching, discipleship, and faithful service and to carry it forward to future generations.",
      journeyP3: "Your prayers are deeply valuable to us.",
      journeyP4:
        "Please remember us in your prayers, that we may remain faithful to the work of God’s Word, steadfast in our calling, and committed to carrying forward the light we have received in Christ.",
      journeyP5: "May the same God who has faithfully led us from 1982 until today continue to guide, strengthen, and use us for His glory.",
      journeyP6: "The journey continues. The mission continues. The light continues to shine.",
    },
    points: {
      education: "Theological education completed in 1997.",
      circumstances: "Ministry began amid difficult circumstances in Pakistan during that period.",
      seminary: "Seminary education and training in Scripture and doctrine.",
      scripture: "Extensive work with Scripture continuing through the ministry's life.",
      outreach: "Ministry among non-Christian communities, alongside the church's own congregation.",
      ongoing: "Ministry activity continuing to the present day, in Karachi and Faisalabad.",
    },
    note: "[CONTENT REQUIRED FROM ORGANIZATION] A fuller, approved account of the ministry's founding and history will replace this list once supplied.",
    imagePlaceholder: "Archive photograph — early ministry or church building",
    imageCaption: "[Caption to be supplied — subject, location, year]",
  },
  missionVision: {
    eyebrow: "Mission & vision",
    heading: "What we're here to do",
    missionLabel: "Mission",
    /**
     * Restructured from the ARTICLES source document (Article 2 —
     * "Mission & Vision", the Mission half), authoritative over the old
     * single flattened `mission` template string this replaces — see
     * lib/about.ts's `missionBlocks` for block order/kind (ArticleBody
     * component). Wording is unchanged; only structure is restored.
     */
    missionBlocks: {
      whyHeading: "What We Are Here to Do",
      whyP1:
        "Our mission is to faithfully serve the Lord Jesus Christ through the proclamation and teaching of God’s Word, the strengthening and building up of the Church, theological and Christian education, the training of pastors and Christian leaders, Christian literature and writing, discipleship, and practical care for children and families in need.",
      whyP2:
        "We seek to serve both Christian and non-Christian communities through the Church, seminary education, biblical teaching, Christian books and articles, public evangelism, and respectful theological dialogue and debate with non-Christian communities.",
      whyP3: "At the heart of our ministry is a simple yet foundational conviction:",

      missionHeading: "Mission",
      missionP1:
        "God’s Word must be faithfully proclaimed, the Church must be strengthened, and children must be given the opportunity to receive an education, grow in their abilities, and build a better future.",

      proclaimingSub: "Proclaiming and Teaching God’s Word",
      proclaimingP1:
        "We proclaim and teach God’s Word among both Christians and non-Christians. This ministry is carried out through the local Church, seminary education, biblical lectures, Christian books and articles, online teaching, public evangelism, and respectful theological dialogue and debate with non-Christian communities.",
      proclaimingP2:
        "Our desire is not merely to communicate biblical truth, but also to help people understand the teaching of Scripture, apply it to their lives, and live according to its truth.",

      strengtheningSub: "Serving and Strengthening the Church",
      strengtheningP1: "Strengthening and building up the Church has been a central part of our ministry since 1982. This journey began through the ministry of Pastor Rehmat Masih and continues today through the present generation.",
      strengtheningP2: "Today, our ministry includes church leadership, preaching and teaching, discipleship, evangelism, music ministry, and the training of pastors, ministers, and other church workers.",
      strengtheningP3: "Over the years, many pastors and ministry leaders who have received training and discipleship through this ministry have gone on to serve in their own churches and communities across Pakistan.",

      trainingSub: "Training Pastors, Leaders, and Disciples",
      trainingP1: "We provide Christian and theological education through the seminary, lectures, biblical and theological articles, structured training materials, and online classes.",
      trainingP2: "Our aim is to equip pastors, church leaders, disciples, and believers with a deeper understanding of Scripture and sound Christian doctrine, enabling them to serve the Church faithfully, responsibly, and with integrity.",

      literatureSub: "Christian Literature and Scholarly Ministry",
      literatureP1: "Christian writing and the study of theology are important parts of our ministry.",
      literatureP2: "Through books, articles, lectures, and responses to biblical and theological questions, we seek to contribute to Christian education and encourage serious and thoughtful engagement with Scripture.",
      literatureP3:
        "Among the works currently associated with this ministry are “A Study of 1,050 Commands in the New Testament” and an upcoming work on “The Canon of Scripture,” along with other books and projects currently in development.",

      musicSub: "Equipping Through Music Ministry",
      musicP1: "Music is also an important part of our ministry.",
      musicP2: "We seek to train church musicians and choirs so that music may serve the worship and spiritual life of the Church in a meaningful way, grounded in Scripture.",
      musicP3: "Our desire is for music to be more than a means of expression. We seek to see it play a purposeful role in the worship of the Church, the spiritual growth of believers, and the glorification of God.",

      childrenSub: "Caring for Children and Their Education",
      childrenP1: "One of our strongest priorities is helping Christian children gain access to school education and remain engaged in their studies.",
      childrenP2:
        "Where needed, we provide educational assistance, including school fees, books, and uniforms. We also maintain contact with families to encourage regular school attendance and to follow and understand each child’s educational progress.",
      childrenP3: "At present, our educational support reaches approximately 30 children. This number may increase or decrease depending on available resources and the circumstances of individual families.",
      childrenP4: "We believe that poverty should not force children into labor when they should have books in their hands.",
      childrenP5: "Education can help break the cycle of poverty, restore dignity, create new opportunities, and open a path toward a brighter future.",
    },
    visionLabel: "Vision",
    /**
     * Restructured from the ARTICLES source document (Article 2 —
     * "Mission & Vision", the Vision/Education-Impact/Core-Values/
     * Commitment half), authoritative over the old single flattened
     * `vision` template string this replaces — see lib/about.ts's
     * `visionBlocks` for block order/kind (ArticleBody component). Wording
     * is unchanged; only structure is restored.
     */
    visionBlocks: {
      visionHeading: "Vision",
      visionDek: "Building a Brighter Future Through Education, Faith, and Opportunity",
      visionP1:
        "Our vision is to see children and young people across Pakistan receive the education, biblical foundation, practical skills, and opportunities they need to live with dignity and to contribute positively to their families, communities, and nation.",
      visionP2:
        "We envision a future in which thousands—and ultimately millions—of children have the opportunity to receive a proper education and build a better future for themselves through knowledge, character, faith, and opportunity.",
      visionP3: "We long to see a future in which no child is deprived of education simply because of poverty.",

      everyChildSub: "Every Child Deserves an Education",
      everyChildP1: "We want to see children remain in school and complete their education rather than being forced into labor.",
      everyChildP2:
        "We envision a future in which children hold books and pens rather than tools of labor; a future in which they have the opportunity to learn, develop their abilities, and discover the potential God has given them.",
      everyChildP3: "Our desire is not limited to Christian children. We want to contribute toward a Pakistan in which children from poor families, regardless of their background, have access to meaningful educational opportunities.",

      empoweringSub: "Empowering the Next Generation",
      empoweringP1: "We want Christian young people to grow not only in their faith but also in education, practical skills, entrepreneurship, and responsible leadership.",
      empoweringP2:
        "Our vision is to see young people become capable of establishing their own businesses and livelihoods, living with dignity and self-respect, providing for their families, creating opportunities for others, and no longer being continually dependent upon others for their basic needs.",
      empoweringP3: "We believe that education, practical skills, and responsible economic opportunities can help young people move from dependency toward self-reliance.",

      characterSub: "Building Character and Responsible Citizens",
      characterP1: "We desire to see educated children and young people become men and women of strong moral character, discipline, responsibility, and integrity.",
      characterP2:
        "We hope that their lives will reflect biblical values and that they will become responsible members of society who reject crime, fulfill their responsibilities faithfully, and contribute positively to their communities.",
      characterP3: "We pray that the character and way of life of Christian believers will point others toward the love and person of the Lord Jesus Christ.",

      betterPakistanSub: "A Better Pakistan",
      betterPakistanP1: "Our vision extends beyond the Church to society as a whole.",
      betterPakistanP2:
        "We desire to see a Pakistan where people from different communities, ethnic groups, and religious backgrounds respect one another and recognize one another’s inherent human dignity and worth.",
      betterPakistanP3:
        "We seek to contribute toward a society where the rule of law is respected, religious prejudice and hatred do not lead to violence, and people are able to live together with mutual respect, compassion, and mercy.",
      betterPakistanP4: "We long to see a society in which the values of human dignity, love, compassion, justice, and respect are increasingly understood and put into practice.",

      pathOutSub: "Education: A Path Out of Poverty",
      pathOutP1: "We do not want our ministry to be limited to short-term financial assistance.",
      pathOutP2: "Our long-term vision is to provide children and young people with education, skills, and opportunities for self-reliance, enabling them to build sustainable futures for themselves and their families.",
      pathOutP3: "We want children from poor families to have access to the same quality of educational opportunities available to children from more affluent families.",
      pathOutP4:
        "Our vision is to reach children who are deprived of education because of poverty and difficult circumstances—particularly within communities in Karachi and Faisalabad, Punjab—while ultimately seeking to extend this ministry to children throughout Pakistan.",

      impactHeading: "Education & Community Impact",
      impactDek: "Investing in Children. Building Futures.",
      impactP1: "Education is one of the central practical expressions of our ministry.",
      impactP2:
        "At present, we support approximately 30 children with their educational needs, including assistance with school fees, books, and uniforms. This number may increase or decrease depending on available resources and the circumstances of individual families.",
      impactP3:
        "Our support is not limited to providing financial assistance. We seek to maintain contact with families and follow the educational progress of the children, including their school attendance, commitment to their studies, and the role of their parents in supporting their education.",

      supportSub: "Educational Support",
      supportIntro: "Where necessary and where resources permit, we assist children with the following:",
      supportItem1: "School fees",
      supportItem2: "School books",
      supportItem3: "School uniforms",
      supportItem4: "Educational expenses",
      supportItem5: "Continued school attendance and educational follow-up",
      supportP1: "We also provide books to children whose families cannot afford to purchase them.",

      childLaborSub: "Breaking the Cycle of Child Labor",
      childLaborP1: "For some families living in poverty, income earned through child labor becomes necessary for their livelihood. As a result, some children leave school before completing their education.",
      childLaborP2: "Our goal is to help families understand the long-term value of education and to create opportunities that enable children to remain in school rather than being forced into labor at an early age.",
      childLaborP3: "We believe that a child’s future should not be determined by poverty.",

      practicalHelpSub: "Practical Help for Families in Need",
      practicalHelpP1: "We also seek to assist individuals and families facing genuine need.",
      practicalHelpP2: "Before providing assistance, we make reasonable efforts to understand their circumstances and verify the need so that available resources can reach those who genuinely require them.",
      practicalHelpP3: "Our desire is to combine compassion with responsibility and to provide every possible form of assistance with dignity, wisdom, and care.",

      valuesHeading: "Our Core Values",
      valuesDek: "The Foundations That Guide Our Faith and Ministry",

      faithSub: "Faith in Christ",
      faithP1: "We are a Baptist Christian ministry and hold to the Christian faith in the Triune God—the Father, the Son, and the Holy Spirit. We baptize in the name of the Father, the Son, and the Holy Spirit.",
      faithP2: "We believe that Jesus Christ is Lord and Savior, and that our faith, salvation, teaching, and ministry must all be centered on Him.",
      faithP3: "Our ministry seeks to remain faithful to Scripture and to uphold the historic convictions of the Baptist tradition.",

      truthSub: "Biblical Truth",
      truthP1: "We believe that the Holy Scriptures are the authoritative Word of God and the foundation of our faith, teaching, ministry, and practical life.",
      truthP2: "We seek to understand Scripture faithfully and to allow biblical truth to guide our doctrine, decisions, character, and service.",

      prayerSub: "Prayer",
      prayerP1: "We believe that prayer is essential to our relationship with God and to every aspect of ministry.",
      prayerP2: "We depend upon God’s guidance, wisdom, strength, and grace, continually seeking Him through prayer as we serve His Church and His people.",

      loveSub: "Love",
      loveP1: "We seek to make the love of Christ visible through the way we treat and serve others.",
      loveP2: "We strive to approach people with love, respect, compassion, mercy, and dignity, remembering that Christian service is not merely about what we do, but also about how we treat those whom God brings into our path.",

      serviceSub: "Service",
      serviceP1: "We believe that every ability and opportunity God gives us should be used in service to Christ, His Church, and others.",
      serviceP2: "We seek to serve through pastoral ministry, preaching, teaching, discipleship, evangelism, music, Christian education, writing, training, and practical care.",

      integritySub: "Integrity",
      integrityP1: "We believe that Christian ministry must be marked by truthfulness, accountability, transparency, and responsibility.",
      integrityP2: "Integrity should shape our character, teaching, relationships, leadership, and stewardship of every responsibility entrusted to us.",

      educationSub: "Christian Education",
      educationP1: "We believe that education is essential to the spiritual and intellectual growth of individuals and communities.",
      educationP2: "Through biblical teaching, seminary education, discipleship, lectures, books, articles, and training, we seek to equip children, young people, believers, pastors, and church leaders for faithful Christian life and service.",

      helpingSub: "Helping Those in Need",
      helpingP1: "We believe that caring for people facing genuine need is a practical expression of Christian love.",
      helpingP2: "We seek to assist children and families facing hardship, particularly by helping children gain access to education and the resources necessary for a better future.",
      helpingP3: "Our goal is not merely to provide short-term assistance but, wherever possible, to create pathways toward education, skills, dignity, and self-reliance.",

      commitmentHeading: "Our Commitment",
      commitmentDek: "Faithful Service Today, a Brighter Future for Generations to Come",
      commitmentP1: "We believe that ministry is not simply about responding to the needs of today. It is about faithfully serving Christ today while helping to build a stronger and brighter future for generations to come.",
      commitmentP2: "From the ministry that began in 1982 to the work continuing today, our desire remains the same:",
      commitmentP3:
        "To faithfully proclaim God’s Word, strengthen His Church, educate the next generation, serve those in need, and carry the light of Christ forward to generations to come.",
    },
    body: "We work to take the light of knowledge into communities facing poverty, and to teach sustainable ways of improving life rather than relying on short-term assistance alone.",
    valuesLabel: "Core values",
  },
  statementOfFaith: {
    eyebrow: "Statement of faith",
    heading: "What we believe",
    trinityLabel: "The Trinity",
    trinity:
      "Dawn of Light Ministry believes in the one true God, eternally existing in three distinct persons: God the Father, God the Son, and God the Holy Spirit. We affirm the Christian doctrine of the Trinity and confess that the Father, Son, and Holy Spirit are one God.",
    doctrineLabel: "Baptism",
    doctrine: "We practice Christian baptism in obedience to the command of Jesus Christ, administering baptism in the name of the Father, and of the Son, and of the Holy Spirit.",
  },
  leadership: {
    eyebrow: "Leadership",
    heading: "Leadership",
    nayyer: {
      name: "Pastor Nayyer Gull",
      role: "Pastor in Charge",
      /**
       * Short excerpt only — the full biography (Article 3 of the ARTICLES
       * source document) is too long for this teaser card and lives at
       * /resources/pastor-nayyer-gull instead (lib/resources.ts), reached
       * via the card's "Read more" link. Never shortened content, just
       * relocated per the "long articles get a Read more" rule.
       */
      bio: "Pastor Nayyer Gull was born on January 22, 1982. The central focus of his life and ministry has been the Word of God, church ministry, Christian education, the training of ministers, written ministry, and providing educational support for children.",
      readMoreLabel: "Read the full story",
      imagePlaceholder: "Pastor Nayyer Gull — portrait pending",
    },
    rahmat: {
      name: "Pastor Rahmat",
      role: "Founder",
      /**
       * Short excerpt only — the full biography (Article 4 of the ARTICLES
       * source document) is too long for this teaser card and lives at
       * /resources/pastor-rahmat-masih instead (lib/resources.ts), reached
       * via the card's "Read more" link. Never shortened content, just
       * relocated per the "long articles get a Read more" rule.
       */
      bio: "Pastor Rahmat Masih was a faithful servant of God whose life was marked by faith, perseverance, prayer, and a steadfast commitment to proclaiming the Word of God, from the founding of the ministry in 1982 until his passing in 2014.",
      readMoreLabel: "Read the full story",
      imagePlaceholder: "Pastor Rahmat — portrait pending",
    },
  },
  cta: {
    heading: "See the mission in its ministries",
    body: "Church, seminary, publishing, education and children's education — one mission, worked out across six ministries.",
    primaryCta: "Explore our ministries",
    secondaryCta: "Request prayer",
  },
} as const;

export type AboutStrings = typeof about;
