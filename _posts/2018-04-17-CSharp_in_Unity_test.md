---
layout: post
title:  "CSharp_04_08"
date:   2018-04-18 18:19:09 +0800
categories: Selflearning Unity
---
## 20180408
## Most things are related to the C# instance today
* Things without the Monobehaviours
* Class, if not lagency from Monobehaviours, can contains as Utilities:
```CSharp
public class Player(){
    private float health = 100.0f;
    private string name = "Default"
    public Player(){

    }//this default constructor can be ignored if no other constructors are claimed
    public Player(string name, float health){
      this.name = name;
      this.health = health;
    }
    public string Name{
      get{return name;}
      set{name = value;}
    }
    public virtual void Attack(){
      Debug.log("Attack");
    }//virtual is needed if want to override in childing
}
```
* Inheritance:
```CSharp
public class Wizard : Player{
  ///if the Inheritance want to using the same constructors, private can't be accessed
  public Wizard(){

  }
  public Wizard(string name, float health){
    this.Name = name;
    this.Health = health
  }
  public override void Attack(){
    parent.Attack();
    Debug.log("Attack");
  }
}
```
* or using the base claim, in this [article](https://www.c-sharpcorner.com/blogs/inheritance-and-constructors-in-c-sharp)
```CSharp
class Class1  
{  
    protected int a, b;  
    public Class1() {  
        a = 0;  
        b = 0;  
        Console.WriteLine("Inside base class default constructor");  
    }  
    public Class1(int a, int b) {  
        this.a = a;  
        this.b = b;  
        Console.WriteLine("Inside base class parameterized constructor");  
    }  
}  
class Class2: Class1 {  
    int c;  
    public Class2(int a, int b, int c): base(a, b) {  
        this.c = c;  
        Console.WriteLine("Inside derived class parametrized constructor");  
    }  
}  
```
