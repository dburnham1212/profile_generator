const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const setUpProfile = () => {
  let profile = { name: "", activity: "", music: "", mealType: "", meal: "", sport: "", superpower: ""}

  const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question("What's your name? Nicknames are also acceptable :): ", (name) => {
        profile.name = name;
        resolve()
      })
    })
  }
  
  const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question("What's an activity you like doing?: ", (activity) => {
        profile.activity = activity;
        resolve()
      })
    })
  }

  const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question("What do you listen to while doing that?: ", (music) => {
        profile.music = music;
        resolve()
      })
    })
  }

  const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.): ", (mealType) => {
        profile.mealType = mealType;
        resolve()
      })
    })
  }

  const question5 = () => {
    return new Promise((resolve, reject) => {
      rl.question("What's your favourite thing to eat for that meal?: ", (meal) => {
        profile.meal = meal;
        resolve()
      })
    })
  }

  const question6 = () => {
    return new Promise((resolve, reject) => {
      rl.question("Which sport is your absolute favourite?: ", (sport) => {
        profile.sport = sport;
        resolve()
      })
    })
  }

  const question7 = () => {
    return new Promise((resolve, reject) => {
      rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", (superpower) => {
        profile.superpower = superpower;
        resolve()
      })
    })
  }
  
  const main = async () => {
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    await question6();
    await question7();
    console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.meal} for ${profile.mealType}, prefers ${profile.sport}
over any othe sport, and is amazing at ${profile.superpower}`);
    rl.close()
  }
  
  main()
};

setUpProfile();

