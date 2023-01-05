interface DrawableEntity {
    draw(x: number, y: number): void;
}

// game system
class GameRenderer {
    private x: number = 0;
    private y: number = 0;

    constructor(private entities: DrawableEntity[]) {};

    public render() {
        for (const entity of this.entities) {
            entity.draw(this.x, this.y);
        }
    }
}

// game art
class CharacterSkin1 implements DrawableEntity {
    draw(x: number, y: number) {

    }
}

class CharacterSkin2 implements DrawableEntity {
    draw(x: number, y: number) {

    }
}

// build the body
const gameEntities: DrawableEntity[] = [new CharacterSkin1(), new CharacterSkin2];
// both of skin can use instaed by DrawableEntity it call Polymorphism
const renderEngine = new GameRenderer(gameEntities);
renderEngine.render();