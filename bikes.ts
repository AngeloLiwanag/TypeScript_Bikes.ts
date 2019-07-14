class Bike {
    // properties / attribute 
    price : number;
    max_speed : string;
    miles : number;

    // constructor 
    constructor(
        price: number,
        max_speed: string,
        miles?: number 
    ){
        this.price = price,
        this.max_speed = max_speed,
        this.miles = 0
    }

    // display info function
    displayInfo() {
        console.log (`Price: ${this.price} Maximum Speed: ${this.max_speed} Miles: ${this.miles}`)
    }

    // ride function
    ride() {
        this.miles += 10; 
        console.log('Riding...')
    }

    // reverse fucntion
    reverse() { 
        if (this.miles != 0){
            this.miles -= 5;
            console.log('Reversing...');
        } else {
            console.log('Can not reverse if there are no miles');
        }
    }
}

let bike1 = new Bike(10, '25mph');
bike1.ride();
bike1.displayInfo();
bike1.reverse();