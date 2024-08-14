// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    helloworldhandler = () => {
        const message = this.createChatBotMessage("Hello, I'm not self aware. Luckly!")
        this.setChatbotMessage(message)

    }
    hellohandler = () => {
        const message = this.createChatBotMessage("Hey there! How can I assist you today?")
        this.setChatbotMessage(message)
    }
    whatshouldAttack = () => {
        const message = this.createChatBotMessage("If you suspect you're having a heart attack, call emergency services immediately (such as 911) and chew an aspirin if available. Stay calm, rest, and avoid exertion while waiting for help. Don't drive yourself to the hospital; have someone else drive you or wait for emergency medical services. Keep others informed of the situation. Time is critical, so seek medical attention without delay to minimize damage and improve outcomes.")
        this.setChatbotMessage(message)
    }

    whoareyou = () => {
        const message = this.createChatBotMessage("I'm healthcare chatbot , an AI designed to chat with you and provide assistance or information relate your health . What can I help you with?")
        this.setChatbotMessage(message)
    }

    whatshouldInfluenza = () => {
        const message = this.createChatBotMessage("Rest, hydrate, take meds if necessary, stay home, seek medical advice if severe, practice good hygiene.")
        this.setChatbotMessage(message)
    }

    whatshouldstroke = () => {
        const message = this.createChatBotMessage("If you suspect heat stroke, act swiftly. Move to a cooler spot immediately, such as shade or air conditioning. Cool yourself down with water, cold compresses, or ice packs, and hydrate with water or sports drinks. Remove any extra clothing and rest in a cool area. If symptoms persist or worsen, seek urgent medical attention, as heat stroke can be life-threatening and requires prompt treatment.")
        this.setChatbotMessage(message)
    }

    whatshouldmigraine = () => {
        const message = this.createChatBotMessage("If you have a migraine, rest in a quiet, dark place and use a cold pack on your head. Take painkillers like ibuprofen if needed, and stay hydrated. Relaxation techniques like deep breathing might help too. Try to figure out what triggers your migraines and avoid those things. If your migraines are bad or happen a lot, talk to a doctor for help.")
        this.setChatbotMessage(message)
    }

    whatshouldSinusitis = () => {
        const message = this.createChatBotMessage("If you have sinusitis, try these easy steps to feel better: drink lots of water, use a saline spray to clear your nose, and apply warm towels to your face. Over-the-counter meds like decongestants can help too. Rest and avoid things that make it worse, like allergens. If you still feel bad, see a doctor for more help.")
        this.setChatbotMessage(message)
    }

    whatshouldcommon = () => {
        const message = this.createChatBotMessage("If you have a cold, rest and drink lots of fluids. Take over-the-counter meds like decongestants for stuffiness and pain relievers for aches. Use saline sprays for your nose and gargle with salt water for a sore throat. If you feel really bad or if it doesn't get better, see a doctor.")
        this.setChatbotMessage(message)
    }

    FeeNot = () => {
        const message = this.createChatBotMessage("what happened , what is your problem ?, why you feel not good.")
        this.setChatbotMessage(message)
    }

    highworldhandler = () => {
        const message = this.createChatBotMessage("Hello, Mustafa Kamal")
        this.setChatbotMessage(message)
    }

    // Influenza
    Influenza1 = () => {
        const message = this.createChatBotMessage("Stay warm, maintain good hygiene, and consider getting vaccinated.")
        this.setChatbotMessage(message)
    }
    Influenza2 = () => {
        const message = this.createChatBotMessage("It can lower your body temperature, potentially increasing your vulnerability to infections like the flu.")
        this.setChatbotMessage(message)
    }
    Influenza3 = () => {
        const message = this.createChatBotMessage("Eating a balanced diet rich in fruits, vegetables, and proteins can help strengthen your immune system against the flu.")
        this.setChatbotMessage(message)
    }
    Influenza4 = () => {
        const message = this.createChatBotMessage("Flu shots are highly recommended as they reduce the risk of getting the flu.")
        this.setChatbotMessage(message)
    }
    Influenza5 = () => {
        const message = this.createChatBotMessage("Yes it can affect your body's ability to fight the virus effectively.")
        this.setChatbotMessage(message)
    }
    // Influenza End
    // Stroke Start
    Stroke1 = () => {
        const message = this.createChatBotMessage("Yes, cold weather can increase stroke risk by causing blood vessels to constrict.")
        this.setChatbotMessage(message)
    }
    Stroke2 = () => {
        const message = this.createChatBotMessage("Includes sudden numbness or weakness, especially on one side of the body, confusion, trouble speaking, and severe headache.")
        this.setChatbotMessage(message)
    }
    Stroke3 = () => {
        const message = this.createChatBotMessage("Yes, sudden weather changes can contribute to stroke risks by affecting blood pressure and stress levels.")
        this.setChatbotMessage(message)
    }
    Stroke4 = () => {
        const message = this.createChatBotMessage("Stay hydrated, avoid strenuous activity during peak heat hours, and stay in air-conditioned environments to reduce stroke risk in high temperatures.")
        this.setChatbotMessage(message)
    }
    Stroke5 = () => {
        const message = this.createChatBotMessage("High humidity can exacerbate dehydration and strain on the cardiovascular system, potentially affecting those with a history of stroke.")
        this.setChatbotMessage(message)
    }
    // Stroke End

    // Migraine
    Migraine1 = () => {
        const message = this.createChatBotMessage("Yes, weather changes, especially rapid shifts in pressure, temperature, and humidity, are known triggers for migraines.")
        this.setChatbotMessage(message)
    }
    Migraine2 = () => {
        const message = this.createChatBotMessage(" Yes, high humidity can trigger migraines in some people.")
        this.setChatbotMessage(message)
    }
    Migraine3 = () => {
        const message = this.createChatBotMessage("Stay hydrated, avoid direct sunlight during peak hours and use cooling products like a neck wrap or hat.")
        this.setChatbotMessage(message)
    }
    Migraine4 = () => {
        const message = this.createChatBotMessage("Staying hydrated with water is crucial; additionally, magnesium-rich foods like almonds and spinach may help prevent migraines.")
        this.setChatbotMessage(message)
    }
    Migraine5 = () => {
        const message = this.createChatBotMessage("Yes, wearing sunglasses can help prevent migraines by reducing eye strain.")
        this.setChatbotMessage(message)
    }
    // Migrane End
    // Heart Attack
    Heart_Attack1 = () => {
        const message = this.createChatBotMessage("Yes, you can exercise outside when it's cold, but warm up indoors first and dress in layers to keep your core temperature stable.  ")
        this.setChatbotMessage(message)
    }
    Heart_Attack2 = () => {
        const message = this.createChatBotMessage("Symptoms of a heart attack in hot weather include chest pain, shortness of breath, nausea, and possibly excessive sweating or dizziness.  ")
        this.setChatbotMessage(message)
    }
    Heart_Attack3 = () => {
        const message = this.createChatBotMessage("Stay hydrated, avoid strenuous activity during the hottest part of the day, and stay in air-conditioned environments to reduce heart strain. ")
        this.setChatbotMessage(message)
    }
    Heart_Attack4 = () => {
        const message = this.createChatBotMessage("Yes, cold weather can increase heart attack risk by raising blood pressure and heart rate due to vasoconstriction (narrowing of blood vessels).")
        this.setChatbotMessage(message)
    }
    Heart_Attack5 = () => {
        const message = this.createChatBotMessage("Wear layered, warm clothing that keeps you insulated without causing overheating, and cover your head, hands, and feet effectively to maintain body heat.")
        this.setChatbotMessage(message)
    }
    // Heart_Attack End
    // Sinusitis
    Sinusitis1 = () => {
        const message = this.createChatBotMessage(" Keep warm, use a humidifier to add moisture to dry indoor air, and stay hydrated. You can also try using a saline nasal spray to keep your nasal passages moist.")
        this.setChatbotMessage(message)
    }
    Sinusitis2 = () => {
        const message = this.createChatBotMessage("Yes, high humidity can worsen sinusitis symptoms by promoting mold growth and increasing allergens. ")
        this.setChatbotMessage(message)
    }
    Sinusitis3 = () => {
        const message = this.createChatBotMessage(" Use a saline nasal spray to keep nasal passages moist, avoid allergens, and consider using a dehumidifier or humidifier depending on the current weather conditions. ")
        this.setChatbotMessage(message)
    }
    Sinusitis4 = () => {
        const message = this.createChatBotMessage("Yes, air purifiers can be helpful as they remove allergens and irritants from the air, which can reduce sinus inflammation. ")
        this.setChatbotMessage(message)
    }
    Sinusitis5 = () => {
        const message = this.createChatBotMessage("Apply warm compresses to your face, inhale steam from hot water, use a nasal saline spray, and keep your head elevated to alleviate sinus pressure. ")
        this.setChatbotMessage(message)
    }
    // Sinusitis End
    // Eczema
    Eczema1 = () => {
        const message = this.createChatBotMessage("Keep your skin moisturized with thick creams or ointments, avoid hot showers, and use a humidifier to add moisture to the air. ")
        this.setChatbotMessage(message)
    }
    Eczema2 = () => {
        const message = this.createChatBotMessage("Yes, you can swim, but rinse off chlorine or saltwater immediately after swimming and apply moisturizer to prevent skin irritation. ")
        this.setChatbotMessage(message)
    }
    Eczema3 = () => {
        const message = this.createChatBotMessage("Wear soft, breathable fabrics like cotton that don't irritate the skin. Avoid rough fabrics like wool or synthetic fibers that can scratch and irritate your eczema. l")
        this.setChatbotMessage(message)
    }
    Eczema4 = () => {
        const message = this.createChatBotMessage("Moderate sun exposure can be beneficial for eczema by reducing inflammation, but too much sun can dry out your skin and worsen symptoms. ")
        this.setChatbotMessage(message)
    }
    Eczema5 = () => {
        const message = this.createChatBotMessage("Thick, cream-based moisturizers or ointments that are fragrance-free are best to protect against dry winter air. ")
        this.setChatbotMessage(message)
    }
    // Heat_Stroke
    Heat_Stroke1 = () => {
        const message = this.createChatBotMessage("Stay hydrated, wear lightweight and loose-fitting clothing, use a hat or umbrella.  In addition to these measures, avoid strenuous activity during the hottest parts of the day.")
        this.setChatbotMessage(message)
    }
    Heat_Stroke2 = () => {
        const message = this.createChatBotMessage("They include high body temperature, altered mental state or behavior (confusion, agitation, slurred speech), nausea, headache, rapid breathing, and possibly loss of consciousness.")
        this.setChatbotMessage(message)
    }
    Heat_Stroke3 = () => {
        const message = this.createChatBotMessage("Drink plenty of water, and you can also have electrolyte-rich sports drinks to maintain salt balance in your body. ")
        this.setChatbotMessage(message)
    }
    Heat_Stroke4 = () => {
        const message = this.createChatBotMessage("The best time to go outside to avoid heat stroke is early in the morning or late in the evening when temperatures are cooler. ")
        this.setChatbotMessage(message)
    }

    Heat_Stroke5 = () => {
        const message = this.createChatBotMessage(" Prevent heat stroke by staying hydrated, resting in shaded or air-conditioned areas, and limiting exposure during the hottest parts of the day. ")
        this.setChatbotMessage(message)
    }
    // Arthritis
    Arthritis1 = () => {
        const message = this.createChatBotMessage(" Hot weather can increase inflammation and discomfort for some arthritis sufferers, while others may experience relief; it varies from person to person.  ")
        this.setChatbotMessage(message)
    }
    Arthritis2 = () => {
        const message = this.createChatBotMessage("Keep warm with layers, use heating pads or warm baths, and maintain light physical activity to keep joints flexible.")
        this.setChatbotMessage(message)
    }
    Arthritis3 = () => {
        const message = this.createChatBotMessage("Yes, many people with arthritis find that warm weather helps ease their symptoms by reducing joint stiffness and pain. ")
        this.setChatbotMessage(message)
    }
    Arthritis4 = () => {
        const message = this.createChatBotMessage("Low-impact exercises like swimming, walking, yoga, and cycling are beneficial for maintaining joint function and reducing arthritis pain. ")
        this.setChatbotMessage(message)
    }
    Arthritis5 = () => {
        const message = this.createChatBotMessage("Wear layers of loose, warm clothing that covers affected joints, such as thermal leggings, long-sleeve shirts, and warm socks or gloves.")
        this.setChatbotMessage(message)
    }
    // Dengue
    Dengue1 = () => {
        const message = this.createChatBotMessage("Use insect repellent, wear long-sleeved shirts and long pants, use mosquito nets while sleeping, and eliminate standing water where mosquitoes breed. ")
        this.setChatbotMessage(message)
    }
    Dengue2 = () => {
        const message = this.createChatBotMessage("Dengue tends to spread more during the rainy season rather than in winter, as the water accumulation provides breeding grounds for mosquitoes")
        this.setChatbotMessage(message)
    }
    Dengue3 = () => {
        const message = this.createChatBotMessage(" Seek medical attention immediately, stay hydrated, rest, and take paracetamol for fever and pain; avoid aspirin as it can increase bleeding risks")
        this.setChatbotMessage(message)
    }
    Dengue4 = () => {
        const message = this.createChatBotMessage("Yes, mosquito nets are very effective in preventing mosquito bites, especially at night, and are a key measure to protect against dengue. ")
        this.setChatbotMessage(message)
    }
    Dengue5 = () => {
        const message = this.createChatBotMessage("Yes, dengue can occur in hot weather, particularly in tropical and subtropical climates where the temperature and humidity support mosquito activity.")
        this.setChatbotMessage(message)
    }
    // Common_Cold
    Common_Cold1 = () => {
        const message = this.createChatBotMessage("Keep warm, maintain good hand hygiene (wash hands frequently with soap and water or use alcohol-based sanitizer), stay hydrated, and avoid close contact with people who are sick to reduce your risk of catching a cold. ")
        this.setChatbotMessage(message)
    }
    Common_Cold2 = () => {
        const message = this.createChatBotMessage("While Vitamin C has not been proven to prevent colds completely, some studies suggest it can shorten the duration and severity of symptoms if you consume it regularly.  ")
        this.setChatbotMessage(message)
    }
    Common_Cold3 = () => {
        const message = this.createChatBotMessage("Rest, stay hydrated, and use over-the-counter remedies like pain relievers, decongestants, or cough suppressants to relieve symptoms.  ")
        this.setChatbotMessage(message)
    }
    Common_Cold4 = () => {
        const message = this.createChatBotMessage("Yes, children are more susceptible to colds because their immune systems are less mature and haven't yet built up immunity to the many viruses that cause colds. ")
        this.setChatbotMessage(message)
    }
    Common_Cold5 = () => {
        const message = this.createChatBotMessage("Flu shots specifically prevent influenza and not the common cold, but getting vaccinated can help you stay healthier during the cold and flu season.")
        this.setChatbotMessage(message)
    }
    // Malaria
    Malaria1 = () => {
        const message = this.createChatBotMessage("Use insect repellent, wear protective clothing, take antimalarial medication prescribed by your doctor, and eliminate standing water to reduce mosquito breeding sites around your accommodation if possible. ")
        this.setChatbotMessage(message)
    }

    Malaria2 = () => {
        const message = this.createChatBotMessage("Wear long-sleeved shirts and long pants, preferably made from tightly woven materials, to minimize exposed skin. ")
        this.setChatbotMessage(message)
    }

    Malaria3 = () => {
        const message = this.createChatBotMessage("Signs of malaria include fever, chills, headache, nausea, vomiting, and body aches, often presenting in cycles of cold, hot, and sweating stages. ")
        this.setChatbotMessage(message)
    }
    Malaria4 = () => {
        const message = this.createChatBotMessage("Yes, malaria transmission is more common in warm climates where mosquitoes thrive and breed more rapidly. Ideal temperatures for mosquito breeding are typically found in tropical and subtropical regions.")
        this.setChatbotMessage(message)
    }
    Malaria5 = () => {
        const message = this.createChatBotMessage("Yes, sleeping under an insecticide-treated mosquito net is a very effective way to protect against malaria by preventing mosquito bites at night.")
        this.setChatbotMessage(message)
    }


    todosHandler = () => {
        const message = this.createChatBotMessage("Sure, here yours todos", {
            widget: "todos",
        });
        this.setChatbotMessage(message)
    };


    setChatbotMessage = (message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message] }))
    }
}

export default ActionProvider;
