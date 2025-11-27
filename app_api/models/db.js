var mongoose=require('mongoose');
var dbURI='mongodb+srv://omerari:Aa123456@cluster0.akuitjs.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=Cluster0';
//         mongodb+srv://omerari:<db_password>@cluster0.akuitjs.mongodb.net/?appName=Cluster0
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log(dbURI+' adresindeki veritabanına bağlanıldı.');
});
mongoose.connection.on('error',function(err){
    console.log('Veritabanı bağlantı hatası: '+err);
}); 
mongoose.connection.on('disconnected',function(){
    console.log('Mongoose bağlantısı kesildi.');
});
process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log('Uygulama sonlandırıldı, Mongoose bağlantısı kapatıldı.');
        process.exit(0);
    });
});
require('./venue');