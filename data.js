const dbData = {
    // ------------------------------------------
    // SOCIAL MEDIA DATA 
    // ------------------------------------------
    facebook: {
        title: "Facebook Performance Hub",
        metrics: { reach: "Reach", likes: "Likes & Reactions", shares: "Shares" },
        data: [
            { label: "Day 1 of the Vibrant Gujarat...", reach: 61752, likes: 861, shares: 33 },
            { label: "GSFC University is all set...", reach: 42640, likes: 556, shares: 15 },
            { label: "The excitement is building...", reach: 40605, likes: 558, shares: 21 },
            { label: "Visit the GSFC University...", reach: 15680, likes: 118, shares: 2 },
            { label: "Preparations are in full...", reach: 15337, likes: 193, shares: 15 },
            { label: "Be part of a transformati...", reach: 10642, likes: 122, shares: 3 },
            { label: "CM Welcome Pics (Multimed...", reach: 6880, likes: 180, shares: 8 },
            { label: "Vibrant Gujarat Regional ...", reach: 6564, likes: 240, shares: 3 },
            { label: "GSFC University is proud ...", reach: 5021, likes: 317, shares: 22 },
            { label: "Just 2 Days to Go! (Photo...", reach: 4827, likes: 54, shares: 2 },
            { label: "Final Day is here! (Photo...", reach: 4324, likes: 510, shares: 20 },
            { label: "Central Gujarat is drivin...", reach: 3455, likes: 36, shares: 2 },
            { label: "Only 4 Days to Go! (Photo...", reach: 3263, likes: 37, shares: 2 },
            { label: "Vibrant Gujarat 2026 Regi...", reach: 2730, likes: 38, shares: 1 }
        ]
    },
    instagram: {
        title: "Instagram Performance & Demographics",
        metrics: { 
            views: "Views", 
            likes: "Likes", 
            shares: "Shares",
            followers: "Followers",
            non_followers: "Non-Followers",
            men: "Men",
            women: "Women"
        },
        hasTableData: true, 
        data: [
            { label: "The excitement is buildin...", views: 73149, likes: 2892, shares: 1402, followers: 23408, non_followers: 49741, men: 49229, women: 23920 },
            { label: "Day 1 of the Vibrant Guja...", views: 65051, likes: 3359, shares: 777, followers: 14767, non_followers: 50284, men: 44170, women: 20881 },
            { label: "GSFC University is all se...", views: 43856, likes: 2075, shares: 356, followers: 7850, non_followers: 36006, men: 30436, women: 13420 },
            { label: "Preparations are in full ...", views: 24929, likes: 862, shares: 349, followers: 12041, non_followers: 12888, men: 16802, women: 8127 },
            { label: "CM Welcome Pics (Carousel...", views: 21808, likes: 1700, shares: 6, followers: 13477, non_followers: 8331, men: 15615, women: 6193 },
            { label: "Final Day is here! (Post)...", views: 16370, likes: 515, shares: 17, followers: 10199, non_followers: 6171, men: 9937, women: 6433 },
            { label: "Newspaper Cuttings (Reel)...", views: 15798, likes: 614, shares: 130, followers: 8815, non_followers: 6983, men: 10521, women: 5277 },
            { label: "Behind every successful e...", views: 15538, likes: 523, shares: 45, followers: 7753, non_followers: 7785, men: 9960, women: 5578 },
            { label: "Warm Welcome to all (Caro...", views: 15537, likes: 1200, shares: 1, followers: 11435, non_followers: 4102, men: 10239, women: 5298 },
            { label: "GSFC University Hosts (Po...", views: 14453, likes: 318, shares: 3, followers: 9337, non_followers: 5116, men: 8831, women: 5622 },
            { label: "Visit the GSFC University...", views: 13570, likes: 481, shares: 18, followers: 9336, non_followers: 4234, men: 8726, women: 4844 },
            { label: "As the Sun Rises (Reel)", views: 10015, likes: 287, shares: 29, followers: 5919, non_followers: 4096, men: 6329, women: 3686 },
            { label: "Just 1 Day to Go! (Post)", views: 9409, likes: 190, shares: 11, followers: 6257, non_followers: 3152, men: 5692, women: 3717 },
            { label: "Central Gujarat is drivin...", views: 6198, likes: 117, shares: 8, followers: 4940, non_followers: 1258, men: 3961, women: 2237 },
            { label: "Just 2 Days to Go! (Post)", views: 5279, likes: 175, shares: 6, followers: 3532, non_followers: 1747, men: 3083, women: 2196 },
            { label: "Only 4 Days to Go! (Post)", views: 4921, likes: 173, shares: 6, followers: 3750, non_followers: 1171, men: 2948, women: 1973 }
        ]
    },
    linkedin: {
        title: "LinkedIn Performance Hub",
        metrics: { impressions: "Impressions", clicks: "Clicks", reactions: "Reactions" },
        data: [
            { label: "GSFC University is proud to host Vibrant Gujarat...", impressions: 5552, clicks: 76, reactions: 172 },
            { label: "Vibrant Gujarat 2026 Regional Conference - Central...", impressions: 1186, clicks: 61, reactions: 68 },
            { label: "GSFC University is proud to host the Vibrant Gujarat...", impressions: 1147, clicks: 47, reactions: 29 },
            { label: "The Vibrant Gujarat Regional Conference 2026, co-hosted...", impressions: 649, clicks: 4068, reactions: 298 },
            { label: "Day 1 of the Vibrant Gujarat Regional Exhibition...", impressions: 500, clicks: 258, reactions: 183 },
            { label: "The excitement is building! Here are the...", impressions: 454, clicks: 260, reactions: 135 },
            { label: "The Vibrant Gujarat Regional Conference - Central...", impressions: 441, clicks: 3378, reactions: 249 },
            { label: "Preparations are in full swing for the Vibrant...", impressions: 340, clicks: 88, reactions: 54 },
            { label: "Visit the GSFC University Stall at Vibrant...", impressions: 331, clicks: 86, reactions: 131 },
            { label: "Only 4 Days to Go! The countdown has begun...", impressions: 242, clicks: 17, reactions: 46 },
            { label: "GSFC University is all set to welcome delegates...", impressions: 232, clicks: 123, reactions: 112 },
            { label: "Final Day is here! Vibrant Gujarat Regional...", impressions: 226, clicks: 51, reactions: 81 },
            { label: "Behind every successful event is a team...", impressions: 157, clicks: 181, reactions: 49 },
            { label: "Be part of a transformative platform where...", impressions: 142, clicks: 20, reactions: 59 },
            { label: "Just 3 Days to Go! The countdown has begun for...", impressions: 87, clicks: 20, reactions: 49 },
            { label: "Just 1 Day to Go! The countdown is almost...", impressions: 52, clicks: 18, reactions: 36 },
            { label: "Central Gujarat is driving the next wave of...", impressions: 33, clicks: 2, reactions: 17 },
            { label: "Just 2 Days to Go! The countdown is on for...", impressions: 32, clicks: 6, reactions: 28 }
        ]
    },
    third_party_reels: {
        title: "Others",
        metrics: { interactions: "Interactions (Est)" }, 
        data: [
            { label: "Vibrant Gujarat Official (30.06 Creative)", interactions: 8900 },
            { label: "Vibrant Gujarat Official (29.06 Reel 1)", interactions: 7450 },
            { label: "Vibrant Gujarat Official (29.06 Reel 2)", interactions: 6200 },
            { label: "Vibrant Gujarat Official (29.06 Photo 1)", interactions: 4100 },
            { label: "Vibrant Gujarat Official (29.06 Photo 2)", interactions: 3850 },
            { label: "Vibrant Gujarat Official (27.06 Reel)", interactions: 3100 },
            { label: "CMO Gujarat Official Broadcast", interactions: 2600 }
        ]
    },

    // ------------------------------------------
    // WEB PORTAL DATA 
    // ------------------------------------------
    web_overview: {
        title: "Web Portal Performance Timeline Overview",
        metrics: { views: "Page Views", sessions: "Sessions", total_users: "Total Users" },
        data: [
            { label: "Jun 29 - Jun 30 (VGRC Launch Kickoff)", views: 4558, sessions: 2349, total_users: 1919 }, 
            { label: "Jul 01 - Jul 03 (Post-Event Wrap-up)", views: 6580, sessions: 3471, total_users: 2419 }
        ]
    },
    
    web_channels: {
        title: "Acquisition Traffic Acquisition Channels",
        metrics: { users: "Acquired Users" },
        data: [
            { label: "Organic Search Engines", users: 3050 },
            { label: "Direct URL Entrances", users: 745 },
            { label: "Organic Social Networks", users: 143 },
            { label: "Referral Links", users: 86 },
            { label: "AI Virtual Assistants", users: 49 },
            { label: "Unassigned Data", users: 20 }
        ]
    },
    web_cities: {
        title: "Geographic Demographics - City Traffic Breakdown",
        metrics: { users: "Total Users", new_users: "New Users" },
        data: [
            { label: "Vadodara", users: 1573, new_users: 977 }, 
            { label: "Ahmedabad", users: 950, new_users: 618 }, 
            { label: "Surat", users: 253, new_users: 170 }, 
            { label: "Others", users: 212, new_users: 155 }, 
            { label: "Mumbai", users: 132, new_users: 91 }, 
            { label: "Rajkot", users: 94, new_users: 59 }, 
            { label: "Pune", users: 49, new_users: 33 }, 
            { label: "Bengaluru", users: 46, new_users: 37 } 
        ]
    },
    web_tech: {
        title: "Technology Metrics - Operating Systems & Platforms",
        metrics: { users: "Total Users", new_users: "New Users" },
        data: [
            { label: "Android Mobile Platforms", users: 1981, new_users: 1433 }, 
            { label: "Windows Desktop Systems", users: 1395, new_users: 938 }, 
            { label: "Apple iOS Infrastructure", users: 436, new_users: 355 }, 
            { label: "Linux Deployments", users: 229, new_users: 78 }, 
            { label: "Macintosh Workstations", users: 89, new_users: 75 } 
        ]
    },

    // ------------------------------------------
    // VGRC IMPACT & PR DATA
    // ------------------------------------------
    pr_mentions: {
        title: "PR Mentions Matrix",
        metrics: { count: "Total Mentions" },
        data: [
            { label: "News Outlets", count: 127 }, 
            { label: "X (Twitter)", count: 31 }, 
            { label: "Other Socials", count: 28 }, 
            { label: "Web Portals", count: 16 }, 
            { label: "Blogs", count: 10 }, 
            { label: "Videos", count: 2 } 
        ]
    },
    pr_influencers: {
        title: "Top PR Influencers Hub",
        metrics: { reach: "Total Generated Reach", followers: "Follower Base" },
        data: [
            { label: "PTI_News (X)", reach: 90000, followers: 4500000 }, 
            { label: "Bhupendrapbjp (X)", reach: 27000, followers: 670000 }, 
            { label: "VibrantGujarat (X)", reach: 12000, followers: 118000 }, 
            { label: "GIFTCity_ (X)", reach: 11000, followers: 20000 }, 
            { label: "GSFCUniversity (X)", reach: 1400, followers: 397 } 
        ]
    },
    demographics: {
        title: "Audience Demographics",
        metrics: { male: "Male Audience (Reach)", female: "Female Audience (Reach)" },
        data: [
            { label: "Age 25-34", male: 25492, female: 11330 }, 
            { label: "Age 18-24", male: 24076, female: 8497 }, 
            { label: "Age 35-44", male: 19827, female: 8497 }, 
            { label: "Age 45-54", male: 12746, female: 5665 }, 
            { label: "Age 55-64", male: 8497, female: 4249 }, 
            { label: "Age 65+", male: 5665, female: 2832 } 
        ]
    },

    print_media: {
        title: "Print Media Categorization",
        hasChart: false, 
        hasTableData: false,
        hasMultiPie: true,
        pieCounts: {
            language: { "Gujarati": 24, "English": 10, "Hindi ": 3 },
            reach: { "State": 26, "National ": 9, "Local": 2 },
            city: { "Vadodara": 26, "Ahmedabad": 7, "Rajasthan": 2, "Gandhinagar": 1, "Mumbai": 1 },
            mention: { "Headline": 4, "Reference Photograph": 1, "Lead Paragraph": 10, "Body Text": 5, "No Mention": 20, "Deck": 1 }
        }
    },
    electronic_news: {
        title: "Electronic Media News Coverage Sites",
        metrics: { publications: "Ranked Placement Rank Index" },
        hasChart: false,
        hasTableData: false,
        hasSinglePie: true,
        pieData: [
            { label: "No Mention", count: 21 },
            { label: "Lead Paragraph", count: 10 },
            { label: "Deck", count: 2 },
            { label: "Reference Photograph", count: 1 },
            { label: "Headline", count: 1 },
            { label: "Body Text", count: 1 }
        ],
        data: [
            { label: "The News Mill Portal", publications: 10 }, 
            { label: "The Halk Digital", publications: 9 }, 
            { label: "Sandesh Web Stream", publications: 8 }, 
            { label: "Times of India Digital News", publications: 7 }, 
            { label: "Business Week", publications: 6 }, 
            { label: "All India Radio", publications: 5 }, 
            { label: "India's News Net", publications: 4 }, 
            { label: "CMO Gujarat Stream Portal", publications: 3 }, 
            { label: "Ahmedabad Mirror Online", publications: 2 }, 
            { label: "Gujarati Jagran Network", publications: 1 } 
        ]
    }
};
