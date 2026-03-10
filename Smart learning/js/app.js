alert("Smart Learning website loaded successfully!");
const supabaseUrl = "zioklpwtkjxnvfxvtoti"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppb2tscHd0a2p4bnZmeHZ0b3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDk5NzUsImV4cCI6MjA4ODcyNTk3NX0.PYbHIEIejaWBxCzKNqD2tVJuUND5jNIPHiqfdbtQgxo"

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
)
document
.getElementById("registerForm")
.addEventListener("submit", async (e)=>{

e.preventDefault()

const student =
document.getElementById("student").value

const parent =
document.getElementById("parent").value

const email =
document.getElementById("email").value

const subject =
document.getElementById("subject").value

const grade =
document.getElementById("grade").value

const country =
document.getElementById("country").value

const { data, error } =
await supabaseClient
.from("students")
.insert([
{
student_name: student,
parent_name: parent,
email: email,
subject: subject,
grade: grade,
country: country
}
])

if(error){

alert("Error saving data")

}

else{

alert("Registration successful")

}

})
const supabaseUrl = "YOUR_SUPABASE_URL"
const supabaseKey = "YOUR_PUBLIC_KEY"

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
)

document.getElementById("loginForm")
.addEventListener("submit", async (e)=>{

e.preventDefault()

const email =
document.getElementById("email").value

const password =
document.getElementById("password").value

const { data, error } =
await supabaseClient.auth.signInWithPassword({

email: email,
password: password

})

if(error){

alert("Login failed")

}

else{

alert("Login successful")

window.location.href="dashboard.html"

}

})
document
.getElementById("bookingForm")
.addEventListener("submit", async (e)=>{

e.preventDefault()

const student =
document.getElementById("student").value

const subject =
document.getElementById("subject").value

const tutor =
document.getElementById("tutor").value

const date =
document.getElementById("date").value

const time =
document.getElementById("time").value

const { data, error } =
await supabaseClient
.from("bookings")
.insert([{

student_name: student,
subject: subject,
tutor: tutor,
date: date,
time: time

}])

if(error){

alert("Booking failed")

}

else{

alert("Class booked successfully")

}

})