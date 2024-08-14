

// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowercase = message.toLowerCase()
        if (lowercase.includes("hello world")) {
            this.actionProvider.helloworldhandler()
        }
        if (message.includes("hello")) {
            this.actionProvider.hellohandler()
        }
        if (message.includes("who are you")) {
            this.actionProvider.whoareyou()
        }
        if (message.includes("migraine")) {
            this.actionProvider.whatshouldInfluenza()
        }
        if (message.includes("I feel I have heat stroke , what should I do ")) {
            this.actionProvider.whatshouldstroke()
        }
        if (message.includes("I have Sinusitis problem what should I do ?")) {
            this.actionProvider.whatshouldSinusitis()
        }
        if (message.includes("I feel common cold what should I do ?")) {
            this.actionProvider.whatshouldcommon()
        }
        if (message.includes("I feel common cold what should I do ?")) {
            this.actionProvider.FeelNot()
        }
        // Enfluenza Start

        if (message.includes("It's really cold here, what can I do to prevent getting the flu?") ||
            message.includes("How can I avoid catching the flu in chilly weather") ||
            message.includes("What are effective ways to prevent flu during the winter months?")) {
            this.actionProvider.Influenza1();
        }
        if (message.includes("influenza")) {
            this.actionProvider.Influenza1();
        }
        if (message.includes("Does wearing wet clothes in the rain increase my flu risk?") ||
            message.includes("Is there a higher chance of catching the flu if I'm soaked in the rain?") ||
            message.includes("Can being damp and cold make me more prone to the flu?")) {
            this.actionProvider.Influenza2();
        }
        if (message.includes("influenza")) {
            this.actionProvider.Influenza2();
        }

        if (message.includes("What should I eat during the winter to avoid the flu?") ||
            message.includes("What are the best foods to boost my immune system against the flu?") ||
            message.includes("Can you suggest a diet to help prevent the flu?")) {
            this.actionProvider.Influenza3();
        }
        if (message.includes("influenza")) {
            this.actionProvider.Influenza3();
        }
        if (message.includes("Are flu shots necessary?") ||
            message.includes("Is it important to get vaccinated against the flu every year?") ||
            message.includes("Can a flu vaccine really help me stay healthy?")) {
            this.actionProvider.Influenza4();
        }
        if (message.includes("influenza")) {
            this.actionProvider.Influenza4();
        }

        if (message.includes("Can cold weather make flu symptoms worse?") ||
            message.includes("Does the flu get more severe in colder temperature?") ||
            message.includes("Will my flu symptoms be exacerbated by the cold weather?")) {
            this.actionProvider.Influenza5();
        }

        if (message.includes("influenza")) {
            this.actionProvider.Influenza5();
        }
        //Influenza End
        // Stroke start
        if (message.includes("Can cold weather increase stroke risk?") ||
            message.includes("Can lower temperature affect the likelihood of having a stroke?") ||
            message.includes("Can exposure to cold weather lead to a risk of stroke?")) {
            this.actionProvider.Stroke1();
        }
        if (message.includes("heat")) {
            this.actionProvider.Stroke1();
        }
        if (message.includes("What are the signs of a stroke in hot weather?") ||
            message.includes("How can I recognize a stroke during a heatwave?") ||
            message.includes("What symptoms should I look for to identify a stroke?")) {
            this.actionProvider.Stroke2();
        }
        if (message.includes("heat")) {
            this.actionProvider.Stroke2();
        }
        if (message.includes(" Can sudden weather changes cause strokes?") ||
            message.includes("Can fluctuations in weather cause a stroke risk?") ||
            message.includes("Can rapid changes in weather conditions impact stroke risk?")) {
            this.actionProvider.Stroke3();
        }
        if (message.includes("heat")) {
            this.actionProvider.Stroke4();
        }
        if (message.includes("heat")) {
            this.actionProvider.Stroke5();
        }
        if (message.includes("What can I do to protect myself from a stroke in high temperatures?") ||
            message.includes("How can I reduce my risk of stroke during hot weather?") ||
            message.includes("What precautions should I take to avoid stroke when it's hot outside?")) {
            this.actionProvider.Stroke4();
        }
        if (message.includes("Does high humidity affect people with stroke history?") ||
            message.includes("Can high humidity worsen stroke risks for those with history of stroke?") ||
            message.includes("How does humidity impact individuals with a history of stroke?")) {
            this.actionProvider.Stroke5();
        }
        // Stroke end

        // Migrane start
        if (message.includes("Can weather changes cause migraines?") ||
            message.includes("Can change in weather conditions trigger migraine?") ||
            message.includes("Can atmospheric changes lead to migraines?")) {
            this.actionProvider.Migraine1();
        }
        if (message.includes("migraine")) {
            this.actionProvider.Migraine1();
        }
        if (message.includes("Can high humidity trigger a migraine?") ||
            message.includes("Does a humid environment increase migraine likelihood?") ||
            message.includes("an being in a humid climate cause migraines?")) {
            this.actionProvider.Migraine2();
        }
        if (message.includes("migraine")) {
            this.actionProvider.Migraine2();
        }
        if (message.includes("What should I do to prevent migraines in hot weather?") ||
            message.includes("How can I avoid migraines during heat waves?") ||
            message.includes("What are effective ways prevent migraines in summer?")) {
            this.actionProvider.Migraine3();
        }
        if (message.includes("Are there any specific drinks or foods that help with weather-related migraines?") ||
            message.includes("What dietary choices can reduce the risk of migraines?") ||
            message.includes("Can certain foods or beverages reduce migraine pain?")) {
            this.actionProvider.Migraine4();
        }
        if (message.includes("Does wearing sunglasses help prevent migraines?") ||
            message.includes("an using sunglasses reduce the risk of migraines?") ||
            message.includes("How effective are sunglasses at preventing migraines?")) {
            this.actionProvider.Migraine5();
        }

        if (message.includes("migraine")) {
            this.actionProvider.Migraine3();
        }
        if (message.includes("migraine")) {
            this.actionProvider.Migraine4();
        }
        if (message.includes("migraine")) {
            this.actionProvider.Migraine5();
        }
        // Migrane end
        // Heart Attack Start
        if (message.includes("Can I exercise outside when it's cold for heart health?") ||
            message.includes("Is it safe to exercise in cold weather if I have heart problem?") ||
            message.includes("Should I avoid outdoor exercise altogether when it's cold and I have heart problems?")) {
            this.actionProvider.Heart_Attack1();
        }
        if (message.includes(" What are the symptoms of a heart attack in hot weather?") ||
            message.includes("How can I recognize a heart attack?") ||
            message.includes("What signs for  a heart attack?")) {
            this.actionProvider.Heart_Attack2();
        }
        if (message.includes("How can I prevent a heart attack during a heatwave?") ||
            message.includes("What steps can I take to minimize heart attack risk during a heatwave?") ||
            message.includes("Besides staying hydrated, are there other ways to manage heart health during a heatwave?")) {
            this.actionProvider.Heart_Attack3();
        }
        if (message.includes("Does cold weather affect heart attack risk?") ||
            message.includes("Can cold temperatures increase chances of heart attack?") ||
            message.includes("How does cold weather put extra strain on the heart?")) {
            this.actionProvider.Heart_Attack4();
        }
        if (message.includes("What should I wear in cold weather if I have heart problems?") ||
            message.includes("How can I dress in cold weather if I have heart issues?") ||
            message.includes("Some tips for staying warm outside in cold weather when you have heart problems?")) {
            this.actionProvider.Heart_Attack5();
        }
        if (
            message.includes("heart attack")) {
            this.actionProvider.Heart_Attack1();
        }
        if (
            message.includes("heart attack")) {
            this.actionProvider.Heart_Attack2();
        }
        if (
            message.includes("heart attack")) {
            this.actionProvider.Heart_Attack3();
        }
        if (
            message.includes("heart attack")) {
            this.actionProvider.Heart_Attack4();
        }
        if (
            message.includes("heart attack")) {
            this.actionProvider.Heart_Attack5();
        }
        // Heart Attack end

        // Sinusitis Start

        if (message.includes("My sinuses get worse in cold weather, what can I do?") ||
            message.includes("How can I manage my sinus problem in cold weather?") ||
            message.includes("Are there other strategies to relieve sinus issues during cold weather?")) {
            this.actionProvider.Sinusitis1();
        }
        if (message.includes("Can humid weather affect sinusitis?") ||
            message.includes("Can high humidity levels impact my sinusitis?") ||
            message.includes("Should I avoid humidifiers if I have allergies and sinusitis?")) {
            this.actionProvider.Sinusitis2();
        }
        if (message.includes(" How can I prevent sinus problems in changing weather?") ||
            message.includes("What steps can I take to prevent sinus issues during changing weather?") ||
            message.includes("Is there anything I can do proactively to avoid sinus problems?")) {
            this.actionProvider.Sinusitis3();
        }
        if (message.includes("Are air purifiers helpful for sinusitis during damp weather?") ||
            message.includes("Can air purifiers improve my sinusitis symptom?") ||
            message.includes("In what way can air purifiers benefit sinusitis?")) {
            this.actionProvider.Sinusitis4();
        }
        if (message.includes("What are the best ways to relieve sinus pressure in cold weather?") ||
            message.includes("How can I find relief from sinus pressure in cold outside?") ||
            message.includes("Any methods to relieve sinus pressure?")) {
            this.actionProvider.Sinusitis5();
        }



        if (
            message.includes("sinusitis")) {
            this.actionProvider.Sinusitis1();
        }
        if (
            message.includes("sinusitis")) {
            this.actionProvider.Sinusitis2();
        }
        if (
            message.includes("sinusitis")) {
            this.actionProvider.Sinusitis3();
        }
        if (
            message.includes("sinusitis")) {
            this.actionProvider.Sinusitis4();
        }
        if (
            message.includes("sinusitis")) {
            this.actionProvider.Sinusitis5();
        }
        // Sinusitis end

        // Eczema Start
        if (message.includes("My eczema worsens in the cold, what can I do?") ||
            message.includes("ow can I manage my eczema flare-ups during cold weather?") ||
            message.includes("Any methods to prevent eczema from worsening in the cold?")) {
            this.actionProvider.Eczema1();
        }
        if (message.includes("Can I swim if I have eczema?") ||
            message.includes("Is swimming safe for people with eczema?") ||
            message.includes("Any precautions I should take when swimming if I have eczema?")) {
            this.actionProvider.Eczema2();
        }
        if (message.includes("What type of clothing is best for eczema?") ||
            message.includes("What fabrics should I choose to minimize eczema irritation?") ||
            message.includes("Are there any specific clothing styles I should avoid if I have eczema?")) {
            this.actionProvider.Eczema3();
        }
        if (message.includes("Does the sun help or hurt eczema?") ||
            message.includes("an sunlight exposure improve or worsen my eczema?") ||
            message.includes("How can I get the benefits of sunlight without triggering my eczema?")) {
            this.actionProvider.Eczema4();
        }
        if (message.includes("What moisturizers are best for dry winter air?") ||
            message.includes("How to choose the best moisturizers to protect my skin during dry winter months?") ||
            message.includes("Tips for moisturizing my skin effectively in dry winter weather?")) {
            this.actionProvider.Eczema5();
        }
        if (
            message.includes("eczema")) {
            this.actionProvider.Eczema1();
        }
        if (
            message.includes("eczema")) {
            this.actionProvider.Eczema2();
        }
        if (
            message.includes("eczema")) {
            this.actionProvider.Eczema3();
        }
        if (
            message.includes("eczema")) {
            this.actionProvider.Eczema4();
        }
        if (
            message.includes("eczema")) {
            this.actionProvider.Eczema5();
        }
        // Eczema1 end

        // Heat_Stoke Start
        if (message.includes("How can I avoid heat stroke in hot weather?") ||
            message.includes("Any strategies can I use besides staying hydrated to prevent heat stroke?") ||
            message.includes("Are there any other precautions I should take to avoid heatstroke in extreme heat?")) {
            this.actionProvider.Heat_Stroke1();
        }
        if (message.includes("What are the signs of heat stroke?") ||
            message.includes("How can I recognize the early warning signs of heat stroke?") ||
            message.includes("Besides high body temperature, are there any other signs that might indicate I'm at risk of heat stroke?")) {
            this.actionProvider.Heat_Stroke2();
        }
        if (message.includes("Are there any special drinks to prevent heat stroke?") ||
            message.includes("What types of fluids are most effective for preventing heat stroke?") ||
            message.includes("Should I consider other drinks than water to prevent heatstroke?")) {
            this.actionProvider.Heat_Stroke3();
        }
        if (message.includes("What is the best time of day to go outside to avoid heat stroke?") ||
            message.includes("Besides going outside during cooler hours, are there any other ways to minimize heatstroke risk when outdoors?") ||
            message.includes("I have to be outside during the hottest part of the day. How can I minimize my risk of heat stroke?")) {
            this.actionProvider.Heat_Stroke4();
        }
        if (message.includes("How to prevent heat stroke?") ||
            message.includes("What proactive steps can I take to prevent heat stroke before symptoms even start?") ||
            message.includes("Besides the tips already mentioned, are there any other ways to be proactive in preventing heatstroke?")) {
            this.actionProvider.Heat_Stroke5();
        }


        if (
        message.includes("heat stroke")) {
        this.actionProvider.Heat_Stroke1();
    }
    if (
        message.includes("heat stroke")) {
        this.actionProvider.Heat_Stroke2();
    }
    if (
        message.includes("heat stroke")) {
        this.actionProvider.Heat_Stroke3();
    }
    if (
        message.includes("heat stroke")) {
        this.actionProvider.Heat_Stroke4();
    }
    if (
        message.includes("heat stroke")) {
        this.actionProvider.Heat_Stroke5();
    }
        // Heat_Stroke


        // Arthritis

        if (message.includes("Can hot weather make arthritis worse?") ||
            message.includes("Can hot weather affect arthritis symptoms?") ||
            message.includes("Are there any ways to manage worsening arthritis pain during hot weather?")) {
            this.actionProvider.Arthritis1();
        }
        if (message.includes("How to ease arthritis pain in cold weather?") ||
            message.includes("What additional strategies can I use besides to manage arthritis pain in cold weather?") ||
            message.includes("How can I target stiffness for arthritis pain relief?")) {
            this.actionProvider.Arthritis2();
        }
        if (message.includes("Can warm weather improve my arthritis symptoms?") ||
            message.includes("Can warm weather benefit people with arthritis?") ||
            message.includes("Should I exercise more in warm weather if I have arthritis?")) {
            this.actionProvider.Arthritis3();
        }
        if (message.includes("Good exercises for arthritis?") ||
            message.includes("Best low-impact exercises for managing arthritis pain?") ||
            message.includes("How often should I exercise if I have arthritis?")) {
            this.actionProvider.Arthritis4();
        }
        if (message.includes("What to wear to keep my joints warm?") ||
            message.includes("Any specific clothing that are better for keeping joints warm?") ||
            message.includes("Are there any other ways to keep my joints warm throughout the day?")) {
            this.actionProvider.Arthritis5();
        }


        if (
        message.includes("arthritis")) {
        this.actionProvider.Arthritis1();
    }
    if (
        message.includes("arthritis")) {
        this.actionProvider.Arthritis2();
    }
    if (
        message.includes("arthritis")) {
        this.actionProvider.Arthritis3();
    }
    if (
        message.includes("arthritis")) {
        this.actionProvider.Arthritis4();
    }
    if (
        message.includes("arthritis")) {
        this.actionProvider.Arthritis5();
    }
        // Arthritis

        // Dengue
        if (message.includes("How to protect myself from dengue??") ||
            message.includes("What are the most effective ways to prevent getting dengue fever?") ||
            message.includes("Are there any other lifestyle changes I can make to minimize my risk of dengue?")) {
            this.actionProvider.Dengue1();
        }
        if (message.includes("Does dengue spread more during the rainy season?") ||
            message.includes("Why does dengue tend to spread more frequently during the rainy season?") ||
            message.includes("HAre there other factors besides rain that can influence dengue outbreaks?")) {
            this.actionProvider.Dengue2();
        }
        if (message.includes("What should I do if I have dengue?") ||
            message.includes("ow can I manage my symptoms at home if I have dengue?") ||
            message.includes("When is it crucial to seek immediate medical attention for dengue?")) {
            this.actionProvider.Dengue3();
        }
        if (message.includes("Are mosquito nets helpful against dengue?") ||
            message.includes("How mosquito nets protect against dengue fever?") ||
            message.includes("Are there any limitations to using mosquito nets for dengue prevention?")) {
            this.actionProvider.Dengue4();
        }
        if (message.includes("Can dengue happen in hot weather") ||
            message.includes("Is there a connection between hot weather and the spread of dengue?") ||
            message.includes("Are there any climate conditions besides hot weather that can affect dengue transmission?")) {
            this.actionProvider.Dengue5();
        }


        if (
        message.includes("dengue")) {
        this.actionProvider.Dengue1();
    }
    if (
        message.includes("dengue")) {
        this.actionProvider.Dengue2();
    }
    if (
        message.includes("dengue")) {
        this.actionProvider.Dengue3();
    }
    if (
        message.includes("dengue")) {
        this.actionProvider.Dengue4();
    }
    if (
        message.includes("dengue")) {
        this.actionProvider.Dengue5();
    }
        // Dengue End

        // Common Cold

        if (message.includes("How to avoid a cold in winters?") ||
            message.includes("Any additional strategies can I use besides staying warm to minimize my chances of getting a cold in the winter?") ||
            message.includes("Any other ways to boost my defenses against winter colds?")) {
            this.actionProvider.Common_Cold1();
        }
        if (message.includes("Does Vitamin C help prevent colds?") ||
            message.includes("Vitamin C and its impact on the common cold?") ||
            message.includes("hould I take high doses of Vitamin C to avoid getting a cold?")) {
            this.actionProvider.Common_Cold2();
        }
        if (message.includes("What to do if I have a cold?") ||
            message.includes("How can I manage my cold symptoms at home?") ||
            message.includes("hen should I see a doctor for my cold?")) {
            this.actionProvider.Common_Cold3();
        }
        if (message.includes("Are children more likely to catch a cold?") ||
            message.includes("Why are children more prone to the common cold than adults?") ||
            message.includes("re there ways to protect my child from getting colds?")) {
            this.actionProvider.Common_Cold4();
        }
        if (message.includes("Are flu shots helpful in preventing common colds?") ||
            message.includes("How can a flu shot help in colds?") ||
            message.includes("What's the difference between the flu and the common cold?")) {
            this.actionProvider.Common_Cold5();
        }


        if (
        message.includes("common cold")) {
        this.actionProvider.Common_Cold1();
    }
    if (
        message.includes("common cold")) {
        this.actionProvider.Common_Cold2();
    }
    if (
        message.includes("common cold")) {
        this.actionProvider.Common_Cold3();
    }
    if (
        message.includes("common cold")) {
        this.actionProvider.Common_Cold4();
    }
    if (
        message.includes("common cold")) {
        this.actionProvider.Common_Cold5();
    }
        // Common Cold End
        // Malaria

        if (message.includes("What should I do to avoid malaria?") ||
            message.includes("Are there any other ways to prevent malaria?") ||
            message.includes("I'm traveling to an area with malaria risk. What steps can I take before my trip to minimize my chances of getting malaria?")) {
            this.actionProvider.Malaria1();
        }
        if (message.includes("What should I wear to protect against malaria?") ||
            message.includes("What type of clothing is best for protection against malaria?") ||
            message.includes("Any additional tips for using clothing for mosquito protection?")) {
            this.actionProvider.Malaria2();
        }
        if (message.includes("What are the signs of malaria?") ||
            message.includes("Symptoms of malaria ?") ||
            message.includes("Should I see a doctor if I experience any flu-like symptoms after traveling to a malaria-prone area?")) {
            this.actionProvider.Malaria3();
        }
        if (message.includes("Is malaria more common when it's hot?") ||
            message.includes("How does climate affect the spread of malaria?") ||
            message.includes("What are the  factors besides climate that can influence malaria transmission?")) {
            this.actionProvider.Malaria4();
        }
        if (message.includes("Can sleeping under a mosquito net help?") ||
            message.includes("Are sleeping nets effective for malaria?") ||
            message.includes("Any limitations to using mosquito nets for malaria prevention?")) {
            this.actionProvider.Malaria5();
        }

          if (  message.includes("malaria")) {
            this.actionProvider.Malaria1();
        }
        if (  message.includes("malaria")) {
            this.actionProvider.Malaria2();
        }
        if (  message.includes("malaria")) {
            this.actionProvider.Malaria3();
        }
        if (  message.includes("malaria")) {
            this.actionProvider.Malaria4();
        }
        if (
            message.includes("malaria")) {
            this.actionProvider.Malaria5();
        }
        // Malaria End

        if (lowercase.includes("todos")) {
            this.actionProvider.todosHandler();
        }
    }
}

export default MessageParser;





