## State Shape

```javascript
{
  entities: {
    users: {
      1: {
        id: 1,
        firstName: "Amanda",
        lastName: "Mitchell",
        email: "me@gmail.com",
        birthDate: "12/04/1989",
        gender: "f",
        country: "United States",
      },
      2: {
        id: 2,
        firstName: "Bonnie",
        lastName: "Thunders",
        email: "skater@girl.com",
        birthDate: "09/06/1983",
        gender: "f",
        country: "United States",
      }
    },
    skateRoutes: {
      1: {
        id: 1,
        mapCenter: [37.4938, 20.9385],
        title: "Test",
        description: "This skate starts downtown and ends up by the river.",
        completionTime: '0:30:00',
        authorId: 1,
      },
      2: {
        id: 2,
        mapCenter: [108.6154, 130.4611],
        title: "Skate parks",
        description: "This skate takes you by several SF skate parks.",
        completionTime: '2:30:00',
        authorId: 1,
      },
      3: {
        id: 3,
        mapCenter: [18.6115, 164.8865],
        title: "Creek Skate",
        description: "This is my favorite skate through the creek path in Burlingame.",
        completionTime: '1:30:00',
        authorId: 2,
      }
    },
    comments: {
      1: {
        id: 1,
        body: "The road on this route is smooth and wonderful!",
        routeId: 3,
        authorId: 2,
      },
      2: {
        id: 2,
        body: "Great, mellow downhill cruise!",
        routeId: 3,
        authorId: 1,
      },
      3: {
        id: 3,
        body: "I tried this route and loved it, thanks for sharing!",
        routeId: 1,
        authorId: 2,
      }
    },
    friends: {
      1: {
        id: 1,
        frienderId: 2,
        friendeeId: 1,
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    signUp: ["Email is already in use", "Password must be at least 6 characters"],
    login: ["Invalid email and/or password"],
    commentForm: ["Comment body cannot be blank"],
  },
  session: { id: 2 }
}
```
