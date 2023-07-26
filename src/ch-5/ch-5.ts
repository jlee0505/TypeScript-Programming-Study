type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

const Shoe: {
  create: (
    type: "balletFlat" | "boot" | "sneaker"
  ) => BalletFlat | Boot | Sneaker;
} = {
  create(type) {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

Shoe.create("boot");
