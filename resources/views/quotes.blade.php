@extends('root')

@section('root-view')
    <div 
        id="quotes-root" 
        data-quotes={{ $quotes }}
    />
@endsection