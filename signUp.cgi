#!/usr/bin/perl -w
use CGI;
use DBI;
my $cgi = new CGI;
my $account = $cgi->param('account');
my $password = $cgi->param('password');
my $name = $cgi->param('name');
my $email = $cgi->param('email');

$DB_user = 'nckucampus';
$DB_pwd = 'yoman';
$DB_name = 'nckucampus';

$dbh = DBI->connect("dbi:mysql:database=$DB_name;",$DB_user,$DB_pwd) or die "Connect Error";
$SQL= "insert into 5_user (account, password, name, email) values ('$account', '$password', '$name','$email')";
$InsertRecord = $dbh->do($SQL);

print "Content-type: text/html\n\n"; # HTTP header
print "$account<br/>$password<br/>$name<br/>$email<br/>";

if ($InsertRecord) {
  print "Success";
} else {
  print "Failure<br/>$DBI::errstr";
}
