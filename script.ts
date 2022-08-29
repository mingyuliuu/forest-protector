import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

const addUser = async (_name, _type, _contact, _address = "") => {
  const user = await prisma.user.create({
    data: {
      name: _name,
      type: _type,
      contact: _contact,
      address: _address,
    },
  });
  console.log(user);
};


const addArea = async (_country, _continent, _region = "") => {
  const area =
    _region === ""
      ? await prisma.area.create({
          data: {
            country: _country,
            continent: _continent,
          },
        })
      : await prisma.area.create({
          data: {
            region: _region,
            country: _country,
            continent: _continent,
          },
        });
  console.log(area);
};

const fetchUserByID = async (_id) => {
  const user = await prisma.user.findMany({
    where: {
      id: _id,
    },
  });
  console.log(user);
};

const fetchUserByName = async (_name) => {
  const user = await prisma.user.findMany({
    where: {
      name: _name,
    },
  });
  console.log(user);
};

export const cleanupDatabase = () => {
  const propertyNames = Object.getOwnPropertyNames(prisma);
  const modelNames = propertyNames.filter(
    (propertyName) => !propertyName.startsWith("_")
  );

  return Promise.all(modelNames.map((model) => prisma[model].deleteMany()));
};

// const addRecord = async(_coordinateID, _coordinate, _time: Date, _windspeed, _proploss, _casualties, _posts=[]) => {
//   await prisma.wildfireRecords.create({
//     data: {
//       coordinateID: _coordinateID,
//       coordinate: _coordinate,
//       time: _time,
//       windspeed: _windspeed,
//       propertyLoss: _proploss,
//       casualties: _casualties,
//       posts: []!
//     }
//   })

// }

// const addPost = async (_authorID, _author, _time: Date, _images=[], _description="", _recordID=null, _record=null) => {
//   if (_recordID){
//     await prisma.post.create({
//       data: {
//         authorId: _authorID,
//         author: _author,
//         time: _time,
//         description: _description,
//         recordID: _recordID,
//         record: _record
//       },
//     });
//   }
//   else {
//     await prisma.post.create({
//       data: {
//         authorId: _authorID,
//         author: _author,
//         time: _time,
//         description: _description
//       },
//     });
//   }

//   };

const addImage = async (_url, _postID) => {
    await prisma.image.create({
      data: {
        url: _url,
        postID: _postID,
        post: {
          connect: {id: _postID}
        }
      },
    });
  };


async function main() {
  // addUser("Max", Role.OrdinaryUser, "12434252");
  // addUser("Max", Role.OrdinaryUser, "112412");
  // addArea("China", "Asia");
  // addArea("United States", "North America");
  // addUser("admin", Role.Firefighter, "911", "123 street");
  // addUser("Lily", Role.OrdinaryUser, "123456789");
  // addUser("Lily", Role.OrdinaryUser, "12222222");
  // addUser("Sally", Role.OrdinaryUser, "11345252");
  // addUser("Sally", Role.OrdinaryUser, "11348252");
//   fetchUserByName("Lily");
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });