#!/usr/bin/perl -w
use CGI;
use DBI;
my $cgi = new CGI;
my $account = $cgi->param('account');
my $password = $cgi->param('password');

$DB_user = 'nckucampus';
$DB_pwd = 'yoman';
$DB_name = 'nckucampus';

$dbh = DBI->connect("dbi:mysql:database=$DB_name;",$DB_user,$DB_pwd) or die "Connect Error";
$SQL= "select password,name,id from 5_user where account = '$account'";
$selectRecord = $dbh->prepare($SQL);
$selectRecord->execute();
$ref = $selectRecord->fetchrow_hashref();

if ($ref && $ref->{'password'} eq $password) {

  print "Set-Cookie: name=$ref->{'name'}\n";
  print "Set-Cookie: id=$ref->{'id'}\n";
  print "Content-type: text/html\n\n"; # HTTP header
  print "success";
}else {
  print "Content-type: text/html\n\n"; # HTTP header
  print "wrong account or password";;
#print "Failure<br/>$DBI::errstr";
}

$dbh->disconnect();     
