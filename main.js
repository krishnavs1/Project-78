var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://media.istockphoto.com/vectors/student-vector-id164539267?k=6&m=164539267&s=612x612&w=0&h=ZLoOltl7RI1enABITJMhWp0gz1-Q06QKJ9HOyCjfDUk=", "https://lh3.googleusercontent.com/proxy/-g5ZaUIr3Qkt4J-ukINQqe6C2Ze4JzB_yBpNVYc0LTF8eEaPYvHjzrcjQBNBlK8d1cIhpmDMeS3pmawWj64b8T96ZkxhuGnYS2KZaMtB", "https://lh3.googleusercontent.com/proxy/SRj_bUbiKUaCcrbMKPqxXB-Xmc_KVTzcN6k-UQ-FunYrZ68AQ2pgRilpiKJnhfnAxxZcGBhKR-ITIclsvu1F94aP"];
var names = ["Family Book","Ankit Singh", "Prerna Singh", "Sripriya Singh", "Krishnav Singh", "Nandika Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
