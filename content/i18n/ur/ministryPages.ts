import type { Translated } from "@/lib/i18n/types";
import type { MinistryPagesStrings } from "@/content/i18n/en/ministryPages";

/**
 * GENERATED FILE — do not hand-edit the structure or add entries by hand.
 * Produced by `npm run i18n:generate -- --locale=ur`
 * (scripts/i18n/generate.ts), which calls the configured TranslationProvider
 * (lib/i18n/translation-provider.ts) for any entry whose sourceHash no
 * longer matches its English source. Regenerating preserves every entry
 * whose sourceHash still matches exactly, byte-for-byte — it never
 * overwrites an existing translation on its own.
 *
 * `published` controls whether this value renders on the live site at all
 * (see lib/i18n/t.ts); `reviewed` records whether a fluent human has
 * actually checked it. No tier auto-publishes — every machine translation,
 * including "label" (pure UI chrome), is written `published: false`. A
 * human has to review it and flip both `reviewed` and `published` here
 * by hand before it reaches visitors. scripts/i18n/shared.ts's
 * `contentTiers` ("label"/"content"/"sensitive"/"critical") only affects
 * review *priority* in `npm run i18n:review -- --locale=ur`, not
 * whether something publishes. See HANDOFF.md §21.
 */
export const ministryPages: Translated<MinistryPagesStrings> = {
  shared: {
    whatHappensEyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "50024c1448c282ff" },
    activitiesHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4d0076e6b4c71059" },
    relatedHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "45ca56d179d4788c" },
    siblingsHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0440e56b84dffcb6" },
    viewAllLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1d7b737513a93dd4" },
  },
  siblings: {
    church: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0da6a63c79366e05" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c89011f72b65c59f" },
    },
    seminary: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0ee81d84a2c817e6" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "78d6f1a0d85f3ff3" },
    },
    publishing: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1c683c92e424dbfb" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14943c3c65008454" },
    },
    education: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "091c24d67cbb5c56" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e08e4d85dfdbd460" },
    },
    childrensEducation: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "18749fd72d02abf2" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c3ddd733a4dbd222" },
    },
  },
  church: {
    breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "837aa0d985b27908" },
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fb79f27faf863aaf" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0da6a63c79366e05" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "35b92336cc7a8f1a" },
    facts: {
      gathers: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5c67408d57fef879" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9271d038d4dfaec3" },
      },
      communion: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "abdf4620d02f2bdd" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b11f6b707d2a03e" },
      },
      cities: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "95697d144956e80b" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6cbef515f9229663" },
      },
      serviceTimes: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f756b529807299ce" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f273e92e858678b5" },
      },
    },
    photoCaption: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "576911cec12ff691" },
    body: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d986ac672cdd9b29" },
      intro: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9289ba4fe4e5134b" },
      placeholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ca4e59ce27f2d9a3" },
      activities: {
        worship: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "597a2d055fd95b92" },
        preaching: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fc96265f3c2d6326" },
        communion: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d1ff624680ef2e16" },
        baptism: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b60d16ec2707e456" },
        prayer: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "65ec6c00de18f4dc" },
      },
    },
    rail: {
      practicalHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4ff9f6d01317f429" },
      practicalBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "258ef692fb00b242" },
      primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "688c8ef99d38b720" },
      secondaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "75a549a5f4252dba" },
      related: {
        statementOfFaith: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b3d1e1960612b1e1" },
        sermons: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "37ad9d4c407fd2cd" },
        prayer: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
      },
    },
    detailBand: {
      eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dbcf58c641357376" },
      note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1c7ea51d0bf8d27c" },
      rows: {
        worshipService: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "73eeea238deeee8e" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "67bbe1211093a139" },
        },
        secondService: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "13c1e7fb92c7b6d9" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "67bbe1211093a139" },
        },
        sundaySchool: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5cf4c50ea2b98000" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3f502d9bc5c204ea" },
        },
        communion: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "46097bcaa37d2034" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "20a623833dd1cac8" },
        },
        seminaryClasses: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f3e921d9206c90c4" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cf728bddcc72d7a1" },
        },
      },
    },
    cta: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "018dd9e63d9a9fdb" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2863c574adc97df9" },
      primaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
      secondaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
    },
  },
  publishing: {
    breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1c683c92e424dbfb" },
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4faca7c395c49fc7" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1c683c92e424dbfb" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fe359a4d4642c196" },
    facts: {
      output: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b2439bcb8dee14b6" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0c5a2b342bc70766" },
      },
      books: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9da7f76bc81d2f4e" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f411a1fb62758b4c" },
      },
      languages: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "318655cea4bd2096" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8a6b859b45ab4f2d" },
      },
      titlesInPrint: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2616cadbc33ec7c8" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f273e92e858678b5" },
      },
    },
    photoCaption: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4a42be5f4d96b615" },
    body: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5d03cb3c15c8f46d" },
      intro: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f06b388e03ddcaf5" },
      placeholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0e0ac03761bc5a38" },
      activities: {
        writing: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d4421a59da7dae10" },
        lectures: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d953c00b4a161106" },
        books: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "27f098b67115bb69" },
        material: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1b0e8d484b05969f" },
      },
    },
    rail: {
      practicalHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "018a2c18edff00d8" },
      practicalBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "feb8846e65ef8fb0" },
      primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d9467921ad04a909" },
      secondaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2b42e3a16bb73b5f" },
      related: {
        resourcesLibrary: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "aa4565daa2c4625c" },
        bibleStudies: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fd51e22f54a9327f" },
        seminary: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "72be8da89808691c" },
      },
    },
    detailBand: {
      eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5eda7c0bf89ec3c4" },
      note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "524a2a553055974c" },
      rows: {
        article: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0632503d45da1ff8" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6d5da7913d25e31c" },
        },
        book: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1d20ca7a75ba8569" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "517e6d0b43969e7b" },
        },
        bibleStudy: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "67ed042522f8211f" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "393e620cede63f08" },
        },
      },
    },
    cta: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "df11e033283f44b9" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2b38a97453e37b46" },
      primaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
      secondaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4794ceb9db053b9b" },
    },
  },
  education: {
    breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "512ab3c6b9869577" },
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bc3abecb5eecb83c" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "091c24d67cbb5c56" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e061fb5de4312494" },
    facts: {
      approach: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b6b243caef1ef4d3" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ad27859c810d90e2" },
      },
      cities: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "95697d144956e80b" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6cbef515f9229663" },
      },
      programmesAndReach: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "89127f49af9d895c" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "33c1d991344c5a9d" },
      },
    },
    photoCaption: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "332a92da08cc8a58" },
    body: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bf314d4d3939febf" },
      intro: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9e20ed7cfe3f2be4" },
      placeholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "08b6863cfa3b3382" },
      activities: {
        education: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "499a7f3e92796577" },
        teaching: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ccaad1f2cc22f6c5" },
        lectures: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ab55fbe906a7593a" },
        material: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5612f215bd94cbca" },
      },
    },
    rail: {
      practicalHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "23b995a19c2be966" },
      practicalBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "86ab41832208d539" },
      primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b4e456a8f91577be" },
      secondaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2ebe1fb88bb03e0d" },
      related: {
        childrensEducation: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "340c6a743f4566b6" },
        missionAndVision: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "43166268ac9a5224" },
        supportTheMission: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "49b50063628cfcd3" },
      },
    },
    detailBand: {
      eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1bacd833266426bf" },
      note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ee0263646571716f" },
      quote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e878e410fe254e8a" },
      quoteBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2f55f4931c656d1a" },
    },
    cta: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bf4cb8f558882afe" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7f67886c158c113d" },
      primaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "74af00b3e451ed2a" },
    },
  },
  childrensEducation: {
    breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "18749fd72d02abf2" },
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6dc43c49e971c942" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "18749fd72d02abf2" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "427c04ad18b7c499" },
    facts: {
      sundaySchool: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5cf4c50ea2b98000" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2975132481a7a695" },
      },
      books: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9da7f76bc81d2f4e" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f411a1fb62758b4c" },
      },
      schoolFees: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4af4ff3233484ed3" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "37e3d5b6560a260b" },
      },
      childrenSupported: {
        label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e14195f5cbfeb33a" },
        value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "93e1e8090130775d" },
      },
    },
    photoCaption: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "81856ea664521426" },
    photoSecondaryCaption: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6f473ac1a90f530f" },
    body: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "df369a72b24ac5cb" },
      intro: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4a6dea7b34a2db73" },
      placeholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fb7ca06c425f73ac" },
      activities: {
        sundaySchool: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8c2a243b01df9132" },
        books: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2a857ac7471e6520" },
        fees: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9a768c56257ae51d" },
        teaching: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e592b898069930d0" },
      },
    },
    rail: {
      practicalHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c3cd1b5b529caa36" },
      practicalBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5fd4f36f4f6a34f2" },
      primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
      secondaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "75a549a5f4252dba" },
      photoPolicyHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "40825ae5983d09d5" },
      photoPolicyBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ce16dd68d18dd7be" },
      related: {
        educationAndOutreach: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "db1461807d0f5915" },
        church: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "837aa0d985b27908" },
        supportTheMission: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "49b50063628cfcd3" },
      },
    },
    detailBand: {
      eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "851e3aacef7fc60c" },
      note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d9674534f827925b" },
      rows: {
        schoolFees: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a1356540da6a1968" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7fe3eebb43c8b8ea" },
        },
        materials: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9c5655ae14a5738a" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7fe3eebb43c8b8ea" },
        },
        sundaySchoolMaterial: {
          label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cd4752fa3c8c624a" },
          value: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7fe3eebb43c8b8ea" },
        },
      },
    },
    cta: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0ac825f18bfc61aa" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e0ae330665affcea" },
      primaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "74af00b3e451ed2a" },
      secondaryLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
    },
  },
};
